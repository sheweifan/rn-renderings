import React from 'react';
// import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from 'antd-mobile';
import {GetCityMes_get} from '../../api/api/my';
// import { Constants, Location, Permissions } from 'expo';
// import { Camera, Permissions } from 'expo';
import {GetProvinceAndCity_get} from '../../api/api'

import  getLocation  from '../../utils/location';
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
        title="选择城市"
        cascade={true}
        extra="选择城市"
        cols={2}
        format={(values)=>{
          // console.log(values)
          return values.join('')
        }}
        value={this.state.sValue}
        onChange={v => {
          // console.log(v);
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
    let cityData = null;
    let cityMes = null;
    try{
      const {Data} = await GetProvinceAndCity_get()
      cityData = Data;

    }catch(e){
      console.log(e);
    }

    try{
      const {coords} = await getLocation();
      const { latitude,longitude } = coords;

      const opts = {
        location:`${latitude}:${longitude}`
      };

      cityMes = await GetCityMes_get(opts);

    }catch(e){
      console.log(e);
    }


    if(cityData){
      const _cityMes = cityMes || { results:[{name:'',path:',,,'}] }
      const name = _cityMes.results[0].name;
      const path = _cityMes.results[0].path.split(',');
      const value = [];
      const parseData = cityData.map(
        ({Code,Name,City})=>{
          if(path[2].match(Name)){
            value[0] = Code;
          }
          return {
            "value": Code,
            "label": Name,
            "children": City.map(
              (citem)=>{
                if(name.match(citem.Name)){
                  value[1] = citem.Code;
                }
                return {
                  "value": citem.Code,
                  "label": citem.Name,
                }
              }
            )
          }
        }
      );
      this.setState({
        cityData: parseData,
        sValue: value.length === 2 ? value : null
      })

    }

  }
}

export default CityPicker;