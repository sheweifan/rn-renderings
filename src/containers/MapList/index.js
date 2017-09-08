import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import Img from '../../components/Img';
// import Imgs from '../../components/Imgs';
import Tab from '../../components/Tab';
import FillterBar from '../../components/FillterBar';
import FillterMenu from '../../components/FillterMenu';

import icon_index from '../../static/images/nav/icon_index.png'
import icon_index_active from '../../static/images/nav/icon_index_active.png'

import _g from '../../config/global.js';

// import Detail from '../../containers/Detail';
// import LinearGradient from 'react-native-linear-gradient';
// import LinearGradient from 'react-native-linear-gradient'; 
//  http://ionicframework.com/docs/ionicons/
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
const FillterOpts= {
  items: [
    {
      id: 1,
      text: '风格',
    },
    {
      id: 2,
      text: '户型',
    },
    {
      id: 3,
      text: '面积',
    },
    {
      id: 4,
      text: '感觉',
    },
  ]
}

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
        ...(_g.os === 'android'? {paddingRight: 50, ..._g.androidFixNavStyle} : {})
      },
    }
  };
  constructor(props){
    super(props);
    this.state= {
      tabActive: 0,
      fillterActive: null,
      fillterMenuHidden: true
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    const { tabActive,fillterActive,fillterMenuHidden } = this.state;
    return (
      <View style={styles.container}>
        <FillterBar 
          {...FillterOpts}
          active={fillterActive}
          fillterChange={this.fillterChange.bind(this)}
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
          hidden={fillterMenuHidden}
          data={new Array(fillterActive*10 || 5).fill('啊啊啊')}
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
  tabChange(tabActive){
    // console.log(tabActive);
    this.setState({
      tabActive,
    });


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
    if(tabActive !== this.state.tabActive){
      this.props.navigation.setParams({
        tabActive: this.state.tabActive
      })
    }
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