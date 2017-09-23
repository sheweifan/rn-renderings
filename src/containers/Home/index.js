import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, ScrollView,TouchableOpacity,FlatList } from 'react-native';

import { LinearGradient } from 'expo';
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

import { TXgt_get } from '../../api/api'


class Index extends React.Component {
  static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon: ({focused}) => {
      // console.log(a)

      return <Image
          source={focused?icon_index_active:icon_index}
          style={[{
            height: 25,
            width: 25,
            resizeMode: 'contain'
          }]}
      />
    },
    header: null
  };
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }
  render() {
    const { data } = this.state;
    const { navigate } = this.props.navigation;
    const Top = ()=> (
      <View>
        <View style={styles.banner}>
          <Image style={styles.bannerImage} source={{uri:'http://dummyimage.com/600x700/ee735c'}}>
          </Image>

          <TouchableOpacity 
            activeOpacity={1}
            style={styles.search}
            onPress={()=>navigate('Search')}
          >
            <Icon name="ios-search" size={28} style={styles.searchIcon} color='#333'/>
            <Text style={styles.searchInput}>搜索</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.topLinks}>
          <TouchableOpacity 
            style={[styles.topLink]}
            onPress={()=>navigate('FreeDisign')}
          >
            <LinearGradient
              colors={['#1263d5', '#04dbec']}
              style={[styles.topLink]}
              start={[0,0.5]}
              end={[1,0.5]}
            >
              <Text style={styles.topLinkText}>0元设计</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.topLink]}>
            <LinearGradient
              colors={['#3c3bb4', '#b761c7']}
              style={[styles.topLink]}
              start={[0,0.5]}
              end={[1,0.5]}
            >
            <TouchableOpacity 
              style={[styles.topLink]}
              onPress={()=>navigate('DesignerList')}
            >
              <Text style={styles.topLinkText}>设计师</Text>
            </TouchableOpacity>
            </LinearGradient>
          </TouchableOpacity>
          
        </View>
      </View>
    );
    return (
      <FlatList 
        data={data}
        style={styles.container}
        ListHeaderComponent={Top}
        keyExtractor={(item, index) => item.EpId}
        renderItem={({item,index})=>{
          return <Imgs key={index} {...item}/>
        }}
      >
      </FlatList>
      );
  }
  componentDidMount(){
    TXgt_get({
      params: {
        pageSize: 10,
        pageIndex: 1
      }
    })
      .then(data=>{
    // console.log(data)
        this.setState({
          data: data.Data
        })
      })
  }
}

const padding = 12;
const inputH = 60;
const bannerH = width*500/750;
// const bannerH = width*250/750;
const styles = StyleSheet.create({
  container: {
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
    elevation: 3,
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
    // backgroundColor: '#e5e5e5'
  },
  // topLink1: {
  //   backgroundColor: '#0aa5e2'
  // },
  // topLink2: {
  //   backgroundColor: '#8351bf'
  // },
  topLinkText: {
    fontSize: 14,
    color: '#fff',
    backgroundColor: 'transparent'
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