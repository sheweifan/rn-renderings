import React from 'react';
// import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from 'antd-mobile';
// {
//   "value": "340000",
//   "label": "安徽省",
//   "children": [{
//     "value": "341500",
//     "label": "六安市",
//     "children": [{
//       "value": "341522",
//       "label": "霍邱县",
//       "children": []
//     },
//   }
// ]
class CityPicker extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      sValue: null,
    }
  }

  render(){

    const seasons = [
      [
        {
          label: '2013',
          value: '2013',
        },
        {
          label: '2014',
          value: '2014',
        },
      ],
      [
        {
          label: '春',
          value: '春',
        },
        {
          label: '夏',
          value: '夏',
        },
      ],
    ];

    return (

     <Picker 
       data={seasons}
       title="选择季节"
       cascade={false}
       extra="请选择(可选)"
       value={this.state.sValue}
       onChange={v => {
         console.log(v)
         this.setState({ sValue: v })
       }}
       { ...this.props }
     >
      {
        this.props.children
      }
     </Picker>
    )
  }
}

export default CityPicker;