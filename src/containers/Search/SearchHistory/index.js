import React from 'react';
import { connect } from "react-redux";
import {
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Dimensions, 
  TouchableOpacity, 
  AsyncStorage,
  ScrollView } from 'react-native';
import actions from '../../../actions';
const {width, height} = Dimensions.get('window');

@connect(
  (({search})=>{
    const {searchHistory, searchHistoryVisable} = search;
    return {
      searchHistory: searchHistory,
    }
  }),
  (dispatch)=>{
    return {
      keyChange: (text)=> dispatch(actions.searchKeyChange(text)),
      clearHistory: ()=> dispatch(actions.searchHistoryClean()),
      initHistory: ()=> dispatch(actions.searchHistoryInit()),
    }
  }
)
class SearchHistory extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {searchHistory,clearHistory, addHistory, keyChange} = this.props;
    if(searchHistory.length === 0 ){
      return null;
    }
    return (
      <ScrollView contentContainerStyle={styles.searchHistoryOuter}>
        <View style={styles.searchHistoryHd}>
          <Text style={styles.searchHistoryTitle}>历史记录</Text>
          <TouchableOpacity 
            style={[styles.searchBtn,styles.searchHistoryResetBtn]}
            onPress={()=>clearHistory()}
          >
            <Text style={[styles.searchBtnText,styles.searchHistoryResetBtnText]}>清空记录</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.SearchHistoryList}>
          {
            searchHistory.map((item,index)=>
              <TouchableOpacity 
                key={index} 
                style={[styles.searchBtn,styles.SearchHistoryItem]}
                onPress={()=>{
                  keyChange(item)
                }}
              >
                <Text style={[styles.searchBtnText]}>{item}</Text>
              </TouchableOpacity>
            )
          }
        </View>
      </ScrollView>
    ) 
  }
  componentDidMount(){
    const { initHistory } = this.props;
    initHistory();
  }
}

const padding = 12;
const styles = StyleSheet.create({
  searchHistoryOuter:{
    backgroundColor: '#fff',
    paddingLeft: padding,
    paddingRight: padding
  },
  searchHistoryHd: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: padding,
    paddingBottom: padding
  },
  searchHistoryTitle: {
    fontSize: 15,
    color: '#000',
    lineHeight: 30
  },
  searchBtn: {
    paddingLeft:13,
    paddingRight: 13,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 15,
    height: 30,
    display: 'flex',
    justifyContent: 'center'
  },
  searchBtnText: {
    fontSize: 13,
    color: '#999999',
  },
  searchHistoryResetBtn:{
    backgroundColor: '#000',
    borderColor: '#000',
  },
  searchHistoryResetBtnText: {
    color: '#fff'
  },
  SearchHistoryList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: padding/2
  },
  SearchHistoryItem: {
    marginBottom: padding/2,
    marginRight: padding/2
  }
})


export default SearchHistory;