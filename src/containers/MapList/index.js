import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';

import Tab from '../../components/Tab';
import List from '../../components/List';
import Img from '../../components/Img';
import Imgs from '../../components/Imgs';
import FillterBar from '../../components/FillterBar';
import FillterMenu from '../../components/FillterMenu';
import _g from '../../config/global.js';

import { TXgt_get, DXgt_get } from '../../api/api'
import fillterTypes from '../../config/fillterTypes';

const {height, width} = Dimensions.get('window');
const tabOpts ={
  items: [
    {
      id:1,
      text: '套图'
    },
    {
      id:2,
      text: '单图'
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
    const params = props.navigation.state.params || {
      map: 'imgs'
    };
    const tabActive = params.map === 'imgs'? 0: 1
    let fillterMenuSelected = new Array(4).fill(0);
    if(params.Id){
      const type = params.type;
      const selectIdx = fillterTypes[type].findIndex(item=> item.OriginalId === params.Id);
      const barItemIdx = FillterOpts[tabActive].findIndex(item => item.type = type);
      fillterMenuSelected[barItemIdx] = selectIdx;
    }
    this.state= {
      tabActive,
      fillterMenuSelected,
      fillterActive: null,
      fillterMenuHidden: true,
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
          items={ FillterBarItems }
          active={fillterActive}
          onChange={this.fillterChange.bind(this)}
        />

        <List 
          contentContainerStyle={styles.listContainer}
          api={tabActive === 0 ? TXgt_get : DXgt_get}
          renderItem={({item,index})=>{
            return tabActive === 0 ? <Imgs key={index} {...item}/> : <Img key={index} {...item}/> 
          }}
          params={{
            type: tabActive === 0 ? 'imgs' : 'img',
            selected: fillterMenuSelected,
          }}
          {...(tabActive ===1?
            {columnWrapperStyle: {
              paddingLeft: 6
            },
            numColumns:2
            }:{})
          }
        >
        </List>
        <FillterMenu
          selected={fillterMenuSelected[fillterActive]}
          selectChange={this.fillterMenuSelectChange.bind(this)}
          hidden={fillterMenuHidden}
          data={fillterMenuData}
        />
      </View>
      );
  }
  fillterChange(fillterActive){
    this.setState({
      fillterActive,
      fillterMenuHidden: fillterActive == null,
    })
  }
  fillterMenuSelectChange(idx){
    const { fillterMenuSelected, fillterActive } = this.state;
    var _fillterMenuSelected = _.clone(fillterMenuSelected);
    _fillterMenuSelected[fillterActive] = idx;
    this.setState({
      fillterMenuSelected: _fillterMenuSelected,
      fillterActive: null,
      fillterMenuHidden: true
    })
    }
  tabChange(tabActive){
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
      tabActive: this.state.tabActive
    })
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
  listContainer: {
    paddingTop: padding
  }
});

export default MapList;