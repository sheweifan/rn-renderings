import React from 'react';
import {
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Dimensions, 
  TouchableOpacity, 
  AsyncStorage,
  ScrollView } from 'react-native';
const {width, height} = Dimensions.get('window');


class SearchHistory extends React.Component{
  render(){
    return (
      <ScrollView contentContainerStyle={styles.searchHistoryOuter}>
        <View style={styles.searchHistoryHd}>
          <Text style={styles.searchHistoryTitle}>历史记录</Text>
          <TouchableOpacity style={[styles.searchBtn,styles.searchHistoryResetBtn]}>
            <Text style={[styles.searchBtnText,styles.searchHistoryResetBtnText]}>清空记录</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.SearchHistoryList}>
          <TouchableOpacity style={[styles.searchBtn,styles.SearchHistoryItem]}>
            <Text style={[styles.searchBtnText]}>清空记录</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.searchBtn,styles.SearchHistoryItem]}>
            <Text style={[styles.searchBtnText]}>清空记</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.searchBtn,styles.SearchHistoryItem]}>
            <Text style={[styles.searchBtnText]}>清空录</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.searchBtn,styles.SearchHistoryItem]}>
            <Text style={[styles.searchBtnText]}>清空记录</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.searchBtn,styles.SearchHistoryItem]}>
            <Text style={[styles.searchBtnText]}>软装搭配注意事项</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
  componentDidMount(){
    AsyncStorage.setItem('fuck','fuck')
    AsyncStorage.getItem('fuck')
      .then((data)=>{
        console.log(data);
      })
  }
}

var padding = 12
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