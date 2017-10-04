import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import FillterBar from '../../components/FillterBar';
import CityPicker from '../../components/CityPicker';
import FillterMenu from '../../components/FillterMenu';


import List from '../../components/List';
import Designer from '../../components/Designer';


const {width, height} = Dimensions.get('window');

import types from '../../config/fillterTypes';
import { GetSolrDesigner_get } from '../../api/api'

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
];
const orderData = [
  '签单数',
  '作品数',
];
const styleData = types.style.map(item=> item.OriginalName);
class DesignerList extends React.Component{
  static navigationOptions = {
    title: '设计师',
  }
  constructor(props){
    super(props);
    this.state={
      fillterActive: null,
      cityPickerVisible: false,
      cityPickerValue: null,
      filterBarItems: items,
      fillterMenuData: [],
      fillterMenuSelected: 0,
      fillterMenuHidden: true
    }
    this.fillterMenuSelected=[0,0];
  }
 
  render(){
    const { fillterActive, 
      cityPickerVisible, 
      cityPickerValue, 
      filterBarItems, 
      fillterMenuData, 
      fillterMenuSelected,
      fillterMenuHidden } = this.state;
    return (
      <View style={styles.detailContainer}>
        <FillterBar
          active={fillterActive}
          items={filterBarItems}
          onChange={ this.fillterBarChange.bind(this) }
        />

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
        {
          cityPickerValue
          ? <List 
            api={GetSolrDesigner_get}
            renderItem={({item,index})=><Designer key={index} {...item}/>}
            params={{
              order: cityPickerValue[1],
              style: cityPickerValue[1],
              city: cityPickerValue[1],
            }}
          />
          : null
        }

        <FillterMenu
          data={fillterMenuData}
          hidden={fillterMenuHidden}
          selected={ fillterMenuSelected }
          selectChange={ this.selectChange.bind(this)}
        />
        
      </View>
    )
  }
  selectChange(i){
    let {filterBarItems, fillterMenuData} = this.state;
    filterBarItems[this.selecting+1].text = fillterMenuData[i];
    this.fillterMenuSelected[this.selecting] = i;
    this.setState({
      fillterMenuSelected: i,
      fillterMenuHidden: true,
      fillterActive: null,
      filterBarItems
    })
  }
  fillterBarChange(i){
    // console.log(i,this.state)
    let fillterMenuHidden = true;
    if(i!==0){
      fillterMenuHidden = (i == null)
    }
    this.selecting = i-1;
    this.setState({
      fillterActive: i,
      cityPickerVisible: i===0 ,
      fillterMenuData: i===1? orderData : styleData,
      fillterMenuHidden,
      fillterMenuSelected: this.fillterMenuSelected[i-1],
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