import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Index from './containers/Home';
import Find from './containers/Find';
import Detail from './containers/Detail';
import Search from './containers/Search';
import MapList from './containers/MapList';

import icon_index from './static/images/nav/icon_index.png'
import icon_index_active from './static/images/nav/icon_index_active.png'

const MainScreenNavigator = TabNavigator(
  {
    Index: {screen: Index},
    Find: {screen: Find},
  }, 
  {
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
      activeTintColor: '#000', // 文字和图片选中颜色
      inactiveTintColor: '#999', // 文字和图片默认颜色
      showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
      indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
      style: {
          backgroundColor: '#fff', // TabBar 背景色
      },
      labelStyle: {
          fontSize: 12, // 文字大小
      },
    },
});


export default StackNavigator({
  Home: { screen: MainScreenNavigator },
  Search: { screen: Search },
  Detail: { screen: Detail },
  MapList: { screen: MapList },
},{
  navigationOptions:{
    headerBackTitle: null,
    headerTintColor: '#000000',
    headerStyle: {
      backgroundColor: '#fff'
    },
  }
});


// React Native专题
// http://www.lcode.org/react-native/

// LayoutAnimation
// http://www.lcode.org/react-native-api%E6%A8%A1%E5%9D%97%E4%B9%8Blayoutanimation%E5%B8%83%E5%B1%80%E5%8A%A8%E7%94%BB%E8%AF%A6%E8%A7%A3-androidios%E9%80%9A%E7%94%A862/


