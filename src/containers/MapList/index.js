import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Img from '../../components/Img';
import Imgs from '../../components/Imgs';

import icon_index from '../../static/images/nav/icon_index.png'
import icon_index_active from '../../static/images/nav/icon_index_active.png'

// import Detail from '../../containers/Detail';
// import LinearGradient from 'react-native-linear-gradient';
// import LinearGradient from 'react-native-linear-gradient'; 
//  http://ionicframework.com/docs/ionicons/
const {height, width} = Dimensions.get('window');

class MapList extends React.Component {
  static navigationOptions = {
    headerTitle: '装修效果图',
    headerStyle: {
      backgroundColor: '#fff'
    },
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Text>装修效果图111</Text>
      </ScrollView>
      );
  }
}

const padding = 12;
const inputH = 60;
// const bannerH = width*500/750;
const bannerH = width*250/750;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
});

export default MapList;