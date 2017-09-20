import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import FillterBar from '../../components/FillterBar';
import Designer from '../../components/Designer';
import CityPicker from '../../components/CityPicker';
import FillterMenu from '../../components/FillterMenu';
const {width, height} = Dimensions.get('window');

const PickerChild = (props)=>(
  <TouchableOpacity onPress={props.onChange}>
    <Text>{props.extra || '全国'}</Text>
  </TouchableOpacity>
)
const items = [
  {
    id: 1,
    text: '正在定位'
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
      fillterActive: null,
      cityPickerVisible: false,
      cityPickerValue: [0,0],
      filterBarItems: items,
      fillterMenuData: [
        '签单数',
        '作品数',
      ],
      fillterMenuHidden: true
    }
  }
 
  render(){
    const { fillterActive, 
      cityPickerVisible, 
      cityPickerValue, 
      filterBarItems, 
      fillterMenuData, 
      fillterMenuHidden } = this.state;
    return (
      <View style={styles.detailContainer}>
        <FillterBar
          active={fillterActive}
          items={filterBarItems}
          onChange={ this.fillterBarChange.bind(this) }
        />
        <ScrollView
        >
          <Designer />
          <Designer />
        </ScrollView>

        <CityPicker 
          visible={cityPickerVisible} 
          onChange={this.cityPickerChange.bind(this)}
          value={cityPickerValue}
          nation={true}
          onDismiss={()=>this.setState({cityPickerVisible:false,fillterActive: null})}
          onOk={()=>this.setState({cityPickerVisible:false,fillterActive: null})}
        >
          <View></View>
        </CityPicker>

        <FillterMenu
          data={fillterMenuData}
          hidden={fillterMenuHidden}
        />
      </View>
    )
  }
  fillterBarChange(i){
    // console.log(i,this.state)
    let fillterMenuHidden = true;
    if(i!==0){
      fillterMenuHidden = (i == null)
    }
    this.setState({
      fillterActive: i,
      cityPickerVisible: i===0 ,
      fillterMenuHidden
    })
    // setTimeout(()=>{
    //   this.setState({
    //     fillterActive: null
    //   })
    // },1000)
  }
  cityPickerChange(value,name){
    let {filterBarItems} = this.state;
    filterBarItems[0].text = name[1] || '全国';
    this.setState({
      fillterActive: null,
      cityPickerVisible: false,
      cityPickerValue: value,
      filterBarItems
    })
  }
}

const btnH = 55;
const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
  }
})


export default DesignerList;


// export default StackNavigator({
//   Home: { screen: Index },
// });