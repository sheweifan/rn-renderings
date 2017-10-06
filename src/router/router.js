import { StackNavigator, TabNavigator } from 'react-navigation';

import Index from '../containers/Home';
import Find from '../containers/Find';
import Search from '../containers/Search';
import MapList from '../containers/MapList';
import FreeDisign from '../containers/FreeDisign';
import DesignerList from '../containers/DesignerList';
import DesignerDetail from '../containers/DesignerDetail';
import ImageView from '../containers/ImageView';

import _g from '../config/global.js';

import icon_index from '../static/images/nav/icon_index.png';
import icon_index_active from '../static/images/nav/icon_index_active.png';


const MainScreenNavigator = TabNavigator(
  {
    Index: {screen: Index},
    Find: {screen: Find},
  }, 
  {
    animationEnabled: false, // 切换页面时不显示动画
    lazy: true, // 是否懒加载
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
      activeTintColor: '#000', // 文字和图片选中颜色
      inactiveTintColor: '#999', // 文字和图片默认颜色
      showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
      indicatorStyle: { height: 0 }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
      style: {
        // paddingBottom: 0,
        // height: 40,
        backgroundColor: '#fff', // TabBar 背景色
        borderTopWidth: 1,
        borderTopColor: '#ececec',
        paddingBottom: _g.os === 'android'? 0 : 3,
        padding: 0,
        ...(_g.os==='android'?{height: 48}:{})
      },
      indicatorStyle:{
        height: 0
      },
      labelStyle: {
        fontSize: 12, // 文字大小
        margin: 0,
      },
      iconStyle: _g.os === 'android'? {
        margin:0,
        padding:0,
        marginTop: -4
      }: {}
    },
});

const Routes = StackNavigator({
  Home: { screen: MainScreenNavigator },
  DesignerList: { screen: DesignerList },
  Search: { screen: Search },
  ImageView: { screen: ImageView },
  DesignerDetail: { screen: DesignerDetail },
  FreeDisign: { screen: FreeDisign },
  MapList: { screen: MapList },
  // Detail: { screen: Detail },
},{
  gesturesEnabled: false, // 是否允许右滑返回，在iOS上默认为true，在Android上默认为false
  navigationOptions:{
    // header: null,
    headerBackTitle: null,
    headerTintColor: '#000000',
    headerStyle: _g.headerStyle,

    // headerTitleStyle:{
    //   alignSelf: 'center'
    //   // display: 'flex',
    //   // justifyContent: 'center',
    //   // alignItems: 'center'
    // },
  },
  headerMode: 'screen'
});

export default Routes;


