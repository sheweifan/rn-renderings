import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';
// import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from "react-redux";
const {width, height} = Dimensions.get('window');


import List from '../../components/List';
import Img from '../../components/Img';
import Imgs from '../../components/Imgs';
import Designer from '../../components/Designer';


import SearchHeader from './SearchHeader'
import SearchHistory from './SearchHistory'
import { TXgt_get, DXgt_get, GetSolrDesigner_get } from '../../api/api'


const getApi = (idx)=>{
  switch(idx){
    case 0:
      return TXgt_get;
    case 1: 
      return DXgt_get;
    case 2:
      return GetSolrDesigner_get;
  }
}

@connect(
  ({search}) => {
    const { searchKey, searchSelected, searchHistoryVisable } = search;
    return {
      searchKey, 
      searchSelected,
      searchHistoryVisable
    }
  }
)
class Search extends React.Component{
  static navigationOptions = {
    // headerTitle: <HeaderSearch /> ,
    // headerStyle: {
    //   width: 500,
    //   height: 50,
    // }
    header: null
  }
  // constructor(props){
  //   super(props);
  // }
  constructor(props){
    super(props);
  }
  render(){
    const { searchKey, searchSelected, searchHistoryVisable } = this.props;

    return (

      <View style={styles.searchOuter}>

        <SearchHeader/>
        {
          searchHistoryVisable
          ? <SearchHistory />
          : <List 
            contentContainerStyle={styles.searchList}
            api={getApi(searchSelected)}
            renderItem={({item,index})=>{
              switch(searchSelected){
                case 0:
                  return <Imgs key={index} {...item}/>
                case 1: 
                  return <Img key={index} {...item}/>
                case 2:
                  return <Designer key={index} {...item} index={index}/>
              }
            }}
            params={{
              order:1,
              Title: searchKey
            }}
            {...(searchSelected===1?
              {columnWrapperStyle: {
                paddingLeft: 6
              },
              numColumns:2
              }:{})
            }
          />
        }
      </View>
    )
  }
  shouldComponentUpdate(nextProps){
    if(nextProps.searchSelected !== this.props.searchSelected){
      return false;
    }else{
      return true;
    }
  }
}

const styles = StyleSheet.create({
  searchOuter: {
    flex: 1
  },
  searchList: {
    paddingTop: 12,
  }
})


export default Search;


// export default StackNavigator({
//   Home: { screen: Index },
// });
// 