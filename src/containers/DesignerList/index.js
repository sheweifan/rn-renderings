import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import FillterBar from '../../components/FillterBar';
import Designer from '../../components/Designer';
const {width, height} = Dimensions.get('window');

const items = [
  {
    id: 1,
    text: '全国',
  },
  {
    id: 2,
    text: '签单数',
  },
  {
    id: 3,
    text: '风格',
  },
]
class DesignerList extends React.Component{
  static navigationOptions = {
    title: '设计师',
  }
  constructor(props){
    super(props);
    this.state={
      fillterActive: null
    }
  }
 
  render(){
    const {fillterActive} = this.state;
    return (
      <View Style={styles.detailContainer}>
        <FillterBar
          active={fillterActive}
          items={items}
          onChange={ (i)=> {
            this.setState({
              fillterActive: i
            })

            setTimeout(()=>{

              this.setState({
                fillterActive: null
              })
            },1000)
          }}
        />
        <Designer />
      </View>
    )
  }
}

const btnH = 55;
const styles = StyleSheet.create({
  
})


export default DesignerList;


// export default StackNavigator({
//   Home: { screen: Index },
// });