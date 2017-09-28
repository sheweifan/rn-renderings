import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';
// import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
const {width, height} = Dimensions.get('window');

import SearchHeader from './SearchHeader'
import SearchHistory from './SearchHistory'


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
    const { navigation } = this.props;
    return (
      <View style={styles.searchOuter}>
        <SearchHeader/>
        <SearchHistory />
        {
          // <Text>
          //   SEARCH
          // </Text>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchOuter: {
    flex: 1
  }
})


export default Search;


// export default StackNavigator({
//   Home: { screen: Index },
// });
// 