import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Item from '../../components/Item'
// import Svg, { Defs, LinearGradient, Stop, Ellipse} from 'react-native-art-svg';  
// import LinearGradient from 'react-native-linear-gradient';
const {height, width} = Dimensions.get('window');

const Index = props => {
  return (
    <View >
      <View style={styles.banner}>
        <Image style={styles.bannerImage} source={{uri:'http://dummyimage.com/600x700/ee735c'}}>
        </Image>
        <View style={styles.search}>
          <Icon name="ios-search" size={28} style={styles.searchIcon} color='#333'/>
          <Text style={styles.searchInput}>搜索</Text>
        </View>
      </View>
      <View style={styles.topLinks}>
        <View style={[styles.topLink,styles.topLink1]}><Text style={styles.topLinkText}>0元设计</Text></View>
        <View style={[styles.topLink,styles.topLink2]}><Text style={styles.topLinkText}>设计师</Text></View>
      </View>
      {
        // <Svg height="150" width="300">
        //   <Defs>
        //     <LinearGradient id="grad" x1="0" y1="0" x2="170" y2="0">
        //       <Stop offset="0" stopColor="rgb(255,255,0)" stopOpacity="0" />
        //       <Stop offset="1" stopColor="red" stopOpacity="1" />
        //     </LinearGradient>
        //   </Defs>
        //   <Ellipse cx="150" cy="75" rx="85" ry="55" fill="url(#grad)" />
        // </Svg>
      }
      <Item />
    </View>
  );
};

const padding = 12;
const inputH = 60;
const bannerH = width*500/750;
const styles = StyleSheet.create({
  banner: {
    height: bannerH+inputH/2,
    position: 'relative'
  },
  bannerImage: {
    width: width,
    height: bannerH
  },
  searchIcon:{
    marginRight: 10,
    marginBottom: -5
  },
  search: {
    width:width-padding*2,
    height: inputH,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',    
    left: padding,
    backgroundColor: '#fff',
    borderRadius: inputH/2,
    top: bannerH-inputH/2,
    flexDirection: 'row',
    position: 'absolute',
    shadowOffset: {
      width: 0, 
      height: 0 
    }, 
    shadowColor:'black', 
    shadowOpacity:0.2, 
    shadowRadius:2
  },
  searchInput: {
    fontSize: 14,
    color: '#999'
  },
  topLinks: {
    paddingLeft: padding,
    paddingRight: padding,
    paddingTop: 25,
    paddingBottom: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  topLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    height: 55,
    width: width*0.5-padding*2,
    backgroundColor: '#e5e5e5'
  },
  topLink1: {

  },
  topLinkText: {
    fontSize: 14,
    color: '#fff'
  }
});

export default Index