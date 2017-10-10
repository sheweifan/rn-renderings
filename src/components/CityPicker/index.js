import React from 'react';
import { connect } from 'react-redux';
import { Picker } from 'antd-mobile';

import {GetCityMes_get} from '../../api/api/my';
import {GetProvinceAndCity_get} from '../../api/api'
import  getLocation  from '../../utils/location';

@connect(
  ({base})=>{
    const {location} = base;
    return {
      location
    }
  }
)
class CityPicker extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      sValue:  this.props.value,
      cityData: null
    }
  }

  render(){
    const {children, onChange } = this.props;
    const {cityData, sValue} = this.state;
    if(cityData == null){
      return React.cloneElement(children, {
        extra: '正在获取城市'
      })
    }

    return (
      <Picker 
        data={cityData}
        title="选择城市"
        cascade={true}
        extra="选择城市"
        cols={2}
        value={sValue}
        { ...this.props }
        onChange={v => {
          this.setState({ sValue: v })
        }}
      >
        {
          children
        }
      </Picker>
    )
  }

  async componentDidMount(){
    const { location, nation } = this.props;
    let cityData = null;
    try{
      const {Data} = await GetProvinceAndCity_get()
      cityData = Data;

    }catch(e){
      console.log(e);
    }


    if(cityData){
      const cityName = location == null ? null : location.cityPath[1];
      const value = [];
      const parseData = cityData.map(
        ({Code,Name,City})=>{
          return {
            "value": Code,
            "label": Name,
            "children": City.map(
              (citem)=>{
                if( cityName != null && cityName.match(citem.Name) ){
                  value = [Code,citem.Code];
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

      if(nation){
        parseData.unshift({
         "value": "1-1-1-1",
          "label": "全国",
          "children": [
            {
              "value": "1-1-1-1",
              "label": "全国"
            }
          ]
        })
      }


      this.setState({
        cityData: parseData,
        sValue: value.length === 2 ? value : null
      })

    }

  }
  componentDidUpdate(prevProps, prevState){
    const {sValue,cityData} = this.state;
    const {onChange} =  this.props;
    const sLabel= new Array(2).fill('');
    if(sValue != null && cityData != null){

      for( let i of cityData){
        if( i.value === sValue[0] ){
          sLabel[0] = i.label;
            
            for(let j of i.children){
              if(j.value === sValue[1]){
                sLabel[1] = j.label;
              }
            }
        }
      }
    }

    if(prevState.sValue !== sValue){
      onChange && onChange(
        sValue,sLabel
      );
    }

  }
}

export default CityPicker;
