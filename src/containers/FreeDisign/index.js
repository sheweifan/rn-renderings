import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, ScrollView,KeyboardAvoidingView } from 'react-native';
// import Img from '../../components/Img';
import FreeDisignForm from './FreeDisignForm';
import _g from '../../config/global.js';
const {height, width} = Dimensions.get('window');

class FreeDisign extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => {
    const { params } = navigation.state;
    return {
      headerTitle: '0元设计'
    }
  };
  constructor(props){
    super(props);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
        <KeyboardAvoidingView
          behavior="position"
        >
          <ScrollView style={styles.container}>
              <Image style={styles.banner} source={{uri: 'http://dummyimage.com/750x320/ee735c'}}/>
              <FreeDisignForm />

              <Image style={styles.banner} source={{uri: 'http://dummyimage.com/750x320/ee735c'}}/>
              <Image style={styles.banner} source={{uri: 'http://dummyimage.com/750x320/ee735c'}}/>
              <Image style={styles.banner} source={{uri: 'http://dummyimage.com/750x320/ee735c'}}/>
              <Image style={styles.banner} source={{uri: 'http://dummyimage.com/750x320/ee735c'}}/>
              <Image style={styles.banner} source={{uri: 'http://dummyimage.com/750x320/ee735c'}}/>
              <Image style={styles.banner} source={{uri: 'http://dummyimage.com/750x320/ee735c'}}/>
          </ScrollView>
        </KeyboardAvoidingView>
      );
  }
}

const padding = 12;
const inputH = 60;
// const bannerH = width*500/750;
const bannerH = width*320/750;
const styles = StyleSheet.create({
  // fixKeyboardContainer:{
  //   flex: 1,
  //   display: 'flex'
  // },
  container: {
    backgroundColor: '#eff0f5',
    // flex: 1
  },
  banner: {
    height: bannerH
  }
});

export default FreeDisign;