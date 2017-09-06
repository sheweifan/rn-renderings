import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button } from 'react-native';
import { TabBar } from 'antd-mobile';
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

class Index extends React.Component {
  static navigationOptions = {
    tabBarLabel: '首页',

    tabBarIcon: ({tintColor}) => (
            <Image
                source={icon_index}
                style={[{tintColor: tintColor},{
                  height: 22,
                  width: 22,
                  resizeMode: 'contain'
                }]}
            />
        ),
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
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
        <Imgs />
      </View>
      );
  }
}


        //<TabBar
        //  unselectedTintColor="#999"
        //  tintColor="#000"
        //  barTintColor="white"
        //>
        //
        //  <TabBar.Item
        //    title="首页"
        //    key="首页"
        //    icon={icon_index}
        //    selectedIcon={icon_index_active}
        //    selected={true}
        //    onPress={() => {
        //      this.setState({
        //        selectedTab: 'blueTab',
        //      });
        //    }}
        //    data-seed="logId"
        //  >
        //
        //    
        //
        //  </TabBar.Item>
        //
        //  <TabBar.Item
        //    title="发现"
        //    key="发现"
        //    selected={false}
        //    onPress={() => {
        //      this.setState({
        //        selectedTab: 'blueTab',
        //      });
        //    }}
        //    data-seed="logId"
        //  >
        //    <View><Text>发现</Text></View>
        //  </TabBar.Item>
        //
        //
        //</TabBar>
        //
        //
          
          // {

          // // <Imgs />
          //   // <Button 
          //   //   onPress={() => navigate('Detail')}
          //   //   title="DETAIL"
          //   // ></Button>

          //   // <Svg height="150" width="300">
          //   //   <Defs>
          //   //     <LinearGradient id="grad" x1="0" y1="0" x2="170" y2="0">
          //   //       <Stop offset="0" stopColor="rgb(255,255,0)" stopOpacity="0" />
          //   //       <Stop offset="1" stopColor="red" stopOpacity="1" />
          //   //     </LinearGradient>
          //   //   </Defs>
          //   //   <Ellipse cx="150" cy="75" rx="85" ry="55" fill="url(#grad)" />
          //   // </Svg>
          //   // <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
          //   //   <Text style={styles.buttonText}>
          //   //     Sign in with Facebook
          //   //   </Text>
          //   // </LinearGradient>
          //   // <LinearGradient
          //   //   start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
          //   //   locations={[0,0.5,0.6]}
          //   //   colors={['#4c669f', '#3b5998', '#192f6a']}
          //   //   style={styles.linearGradient}>
          //   //   <Text style={styles.buttonText}>
          //   //     Sign in with Facebook
          //   //   </Text>
          //   // </LinearGradient>
          // }

// const Index = props => {
//   return (
//     <View >
//       <View style={styles.banner}>
//         <Image style={styles.bannerImage} source={{uri:'http://dummyimage.com/600x700/ee735c'}}>
//         </Image>
//         <View style={styles.search}>
//           <Icon name="ios-search" size={28} style={styles.searchIcon} color='#333'/>
//           <Text style={styles.searchInput}>搜索</Text>
//         </View>
//       </View>
//       <View style={styles.topLinks}>
//         <View style={[styles.topLink,styles.topLink1]}><Text style={styles.topLinkText}>0元设计</Text></View>
//         <View style={[styles.topLink,styles.topLink2]}><Text style={styles.topLinkText}>设计师</Text></View>
//       </View>

//       <Item />

//       {
//         // <Svg height="150" width="300">
//         //   <Defs>
//         //     <LinearGradient id="grad" x1="0" y1="0" x2="170" y2="0">
//         //       <Stop offset="0" stopColor="rgb(255,255,0)" stopOpacity="0" />
//         //       <Stop offset="1" stopColor="red" stopOpacity="1" />
//         //     </LinearGradient>
//         //   </Defs>
//         //   <Ellipse cx="150" cy="75" rx="85" ry="55" fill="url(#grad)" />
//         // </Svg>
//         // <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
//         //   <Text style={styles.buttonText}>
//         //     Sign in with Facebook
//         //   </Text>
//         // </LinearGradient>
//         // <LinearGradient
//         //   start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
//         //   locations={[0,0.5,0.6]}
//         //   colors={['#4c669f', '#3b5998', '#192f6a']}
//         //   style={styles.linearGradient}>
//         //   <Text style={styles.buttonText}>
//         //     Sign in with Facebook
//         //   </Text>
//         // </LinearGradient>
//       }
//     </View>
//   );
// };

const padding = 12;
const inputH = 60;
// const bannerH = width*500/750;
const bannerH = width*250/750;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
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
    shadowOpacity: 0.2, 
    shadowRadius: 5,
    elevation: 5,
    // borderWidth: 1,
    // borderColor: '#e5e5e5'
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
    justifyContent: 'space-between'
  },
  topLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    height: 55,
    width: (width)*0.5-padding*1.5,
    backgroundColor: '#e5e5e5'
  },
  topLink1: {
    backgroundColor: '#0aa5e2'
  },
  topLink2: {
    backgroundColor: '#8351bf'
  },
  topLinkText: {
    fontSize: 14,
    color: '#fff'
  },
  // linearGradient: {
  //   flex: 1,
  //   paddingLeft: 15,
  //   paddingRight: 15,
  //   borderRadius: 5
  // },
  // buttonText: {
  //   fontSize: 18,
  //   textAlign: 'center',
  //   margin: 10,
  //   color: '#ffffff',
  //   backgroundColor: 'transparent',
  // },
});

export default Index;