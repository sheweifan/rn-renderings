import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');


class Designer extends React.Component{
  static navigationOptions = {
    title: '设计师',
  }
  constructor(props){
    super(props);
  }
 
  render(){
    return (
      <View Style={styles.detailContainer}>
        <Text>Designer</Text>
      </View>
    )
  }
}

const btnH = 55;
const styles = StyleSheet.create({
  
})


export default Designer;


// export default StackNavigator({
//   Home: { screen: Index },
// });