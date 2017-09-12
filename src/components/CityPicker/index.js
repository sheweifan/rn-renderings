import React from 'react';
// import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from 'antd-mobile';
import {GetProvinceAndCity_get} from '../../api/api'

class CityPicker extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      sValue: null,
      cityData: null
    }
  }

  render(){
    const {children} = this.props;
    const {cityData} = this.state;
    // console.log('render',cityData)
    if(cityData == null){
      return React.cloneElement(children, {
        //把父组件的props.name赋值给每个子组件
        extra: '正在获取城市'
      })
    }
    // console.log('render')

    return (

     <Picker 
       data={cityData}
       title="选择季节"
       cascade={true}
       extra="请选择(可选)"
       cols={2}
       value={this.state.sValue}
       onChange={v => {
         // console.log(v)
         this.setState({ sValue: v })
       }}
       { ...this.props }
     >
      {
        children
      }
     </Picker>
    )
  }

  async componentDidMount(){
    try{
      const {Data} = await GetProvinceAndCity_get()
      const parseData = Data.map(
        ({Code,Name,City})=>({
          "value": Code,
          "label": Name,
          "children": City.map(
            (citem)=>({
              "value": citem.Code,
              "label": citem.Name,
            })
          )
        })
      );

      this.setState({
        cityData: parseData
      })
    }catch(e){
      console.log(e);
    }
  }
}

export default CityPicker;