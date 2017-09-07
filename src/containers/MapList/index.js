import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import Img from '../../components/Img';
// import Imgs from '../../components/Imgs';
import Tab from '../../components/Tab';
import FillterBar from '../../components/FillterBar';

import icon_index from '../../static/images/nav/icon_index.png'
import icon_index_active from '../../static/images/nav/icon_index_active.png'

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
        display: 'flex',
        ...(params ? params.headerStyle: {} )
      },
    }
  };
  constructor(props){
    super(props);
    this.state= {
      tabActive: tabOpts.items[0].id
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    const { tabActive } = this.state;
    return (
      <View style={styles.container}>
        <FillterBar 
          {...FillterOpts}
        />
        <ScrollView>
          <Text>
            {
              tabActive === 1
              ? '单图'
              : '套图'
            }
          </Text>
        </ScrollView>
      </View>
      );
  }
  tabChange(tabActive){
    // console.log(tabActive);
    this.setState({
      tabActive
    })
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
  shouldComponentUpdate(prevProps,{tabActive}){
    if(tabActive !== this.state.tabActive){
      this.props.navigation.setParams({
        tabActive: tabActive
      })
    }
    return true;
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