import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Detail extends React.Component{
  static navigationOptions = {
    title: 'Detail',
  };
  render(){
    return (
      <View><Text>Detail</Text></View>
    )
  }
}
export default Detail;

// export default StackNavigator({
//   Home: { screen: Index },
// });