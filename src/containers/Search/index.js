import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';
// import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
const {width, height} = Dimensions.get('window');

const HeaderSearch = ()=>{
  return (
    <Text>
      <Icon name="ios-search" size={28} color='#333' />
      <TextInput placeholder="请输入搜索内容" />
    </Text>
  )
}

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
  render(){
    return (
      <View>
        <Text>
          SEARCH
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
})


export default Search;


// export default StackNavigator({
//   Home: { screen: Index },
// });
// 