import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
const {width, height} = Dimensions.get('window');


class SearchHistory extends React.Component{
  render(){
    return (
      <ScrollView contentContainerStyle={styles.searchHistoryOuter}>
        <View style={styles.searchHistoryHd}>
          <Text style={styles.searchHistoryTitle}>历史记录</Text>
          <TouchableOpacity style={styles.searchHistoryResetBtn}>
            <Text style={styles.searchHistoryResetBtnText}>清空记录</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  searchHistoryOuter:{
    backgroundColor: '#fff',
    paddingLeft: 12,
    paddingRight: 12
  },
  searchHistoryHd: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchHistoryTitle: {
    fontSize: 15,
    color: '#000',
  }
})


export default SearchHistory;


// export default StackNavigator({
//   Home: { screen: Index },
// });
// 