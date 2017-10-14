import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Tab from '../../components/Tab';
import FillterBar from '../../components/FillterBar';
import FillterMenu from '../../components/FillterMenu';
import _g from '../../config/global.js';

import fillterTypes from '../../config/fillterTypes';

const {height, width} = Dimensions.get('window');
const tabOpts ={
  items: [
    {
      id:1,
      text: '单图'
    },
    {
      id:2,
      text: '套图'
    }
  ]
};
const FillterOpts= [
  [
    {
      id: 1,
      text: '风格',
      type: 'style'
    },
    {
      id: 2,
      text: '户型',
      type: 'type'
    },
    {
      id: 3,
      text: '面积',
      type: 'm'
    },
    {
      id: 4,
      text: '感觉',
      type: 'color'
    },
  ],
  [
    {
      id: 1,
      text: '风格',
      type: 'style'
    },
    {
      id: 5,
      text: '空间',
      type: 'kind'
    },
    {
      id: 6,
      text: '局部',
      type: 'part'
    },
    {
      id: 4,
      text: '感觉',
      type: 'color'
    },
  ]
];

class MapList extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => {
    const { params } = navigation.state;
    return {
      headerTitle:  <Tab 
        {...tabOpts}
        active={ (params ? params.tabActive : 0) }
        tabChange={ ( params ? params.tabChange: function(){} ) }
      />,
      headerStyle: {
        backgroundColor: '#fff',
        ...(params ? params.headerStyle: {} ),
        ...(_g.os === 'android'? {paddingRight: 50, ..._g.headerStyle} : {})
      },
      headerTitleStyle:{
        alignSelf: 'center'
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center'
      },
    }
  };
  constructor(props){
    super(props);
    // console.log(props);
    const params = props.navigation.state.params;
    console.log(params)
    this.state= {
      tabActive: 0,
      fillterActive: null,
      fillterMenuHidden: true,
      fillterMenuSelected: [0,0,0,0],
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    const { tabActive, fillterActive, fillterMenuHidden, fillterMenuSelected } = this.state;

    const FillterBarBaseItems = FillterOpts[tabActive];
    const nowTypeData = fillterActive == null ? [] : fillterTypes[ FillterBarBaseItems[fillterActive].type ];
    const fillterMenuData = nowTypeData.map((item)=> item.OriginalName);

    const FillterBarItems = FillterBarBaseItems.map((item,i)=> {
      const _selected = fillterMenuSelected[i];
      return _selected===0? item : {
        text: fillterTypes[item.type][_selected].OriginalName,
        id: fillterTypes[item.type][_selected].Id
      }
    })

    return (
      <View style={styles.container}>
        <FillterBar 
          // {...FillterOpts}
          items={ FillterBarItems }
          active={fillterActive}
          onChange={this.fillterChange.bind(this)}
        />
        <ScrollView>
          <Text>
            {
              tabActive === 1
              ? '套图'
              : '单图'
            }
          </Text>
        </ScrollView>
        <FillterMenu
          selected={fillterMenuSelected[fillterActive]}
          selectChange={(i)=>{
            fillterMenuSelected[fillterActive] = i;
            this.setState({
              fillterMenuSelected,
              fillterActive: null,
              fillterMenuHidden: true
            })
          }}
          hidden={fillterMenuHidden}
          data={fillterMenuData}
        />
      </View>
      );
  }
  fillterChange(fillterActive){
    // console.log('fillterActive',fillterActive)
    this.setState({
      fillterActive,
      fillterMenuHidden: fillterActive == null,
    })
  }
  tabChange(tabActive){
    // console.log(tabActive);

    if(tabActive !== this.state.tabActive){
      this.setState({
        tabActive,
        fillterMenuSelected: new Array(4).fill(0),
        fillterActive: null,
        fillterMenuHidden: true
      });
      this.props.navigation.setParams({
        tabActive: tabActive
      })
    }

  }
  componentDidMount(){
    this.props.navigation.setParams({
      tabChange: this.tabChange.bind(this),
      tabActive: this.state.tabActive,
      // headerStyle: {
      //   display: 'none'
      // }
    })
  }
  componentDidUpdate(prevProps,{tabActive}){
    // if(tabActive !== this.state.tabActive){
    //   this.props.navigation.setParams({
    //     tabActive: this.state.tabActive
    //   })
    // }
  }
}

const padding = 12;
const inputH = 60;
// const bannerH = width*500/750;
const bannerH = width*250/750;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
});

export default MapList;