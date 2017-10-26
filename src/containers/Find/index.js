import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
// import Detail from '../../containers/Detail';
// import LinearGradient from 'react-native-linear-gradient';
// import LinearGradient from 'react-native-linear-gradient'; 
//  http://ionicframework.com/docs/ionicons/

const imgPrefix = 'http://ovupcbkpm.bkt.clouddn.com/';

import data from '../../config/findData.js';
import icon_find from '../../static/images/nav/icon_find.png'
import icon_find_active from '../../static/images/nav/icon_find_active.png'

const {height, width} = Dimensions.get('window');

const FindItem = ({text,img, onPress})=>{
  return (
    <TouchableOpacity style={styles.findItem} onPress={onPress}>
      <Image style={styles.findItemImg} source={{uri:imgPrefix+img}}>
        <Text style={styles.findItemText}>
          {text}
        </Text>
      </Image>
    </TouchableOpacity>
  )
}
const FindTitle = ({title})=>{
  return (
    <View style={styles.findTitle}>
      <Text style={styles.findTitleText}>{title}</Text>
    </View>
  )
}

class Find extends React.Component {
  static navigationOptions = {
    tabBarLabel: '发现',
    tabBarIcon: ({focused}) => {
      // console.log(a)
      return <Image
          source={focused?icon_find_active:icon_find}
          style={[{
            height: 25,
            width: 25,
            resizeMode: 'contain'
          }]}
      />
    },
    headerTitle: '发现',
    headerTitleStyle:{
      alignSelf: 'center'
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center'
    },
    // header: null
  };
  goMap(opts){
    this.props.navigation.navigate('MapList',opts)
  }
  render() {
    return (
      <View style={styles.findContainer}>
        <ScrollView>
          <View style={styles.findScrollContainer}>
            {
              data.map((item, index)=>(
                <View key={index}>
                    <FindTitle title={item.typeText}/>
                    <View style={styles.findList}>
                      { 
                        item.child.map(cItem=> <FindItem 
                          {...cItem} 
                          key={cItem.Id} 
                          onPress={this.goMap.bind(this, {
                            type: item.type,
                            map: item.map,
                            ...cItem
                          })} 
                        />)
                      }
                      <TouchableOpacity 
                        style={[styles.findItem,styles.findItemMore]} 
                        onPress={
                          this.goMap.bind(this,{
                            type: item.type,
                            map: item.map,
                          })
                        }
                      >
                        <Text style={styles.findItemMoreCh}>更多{item.typeText}</Text>
                        <Text style={styles.findItemMoreEn}>More</Text>
                      </TouchableOpacity>
                    </View>
                </View>)
              )
            }
          </View>
        </ScrollView>
      </View>
      );
  }
}

const padding = 12;
const itemW = (width - padding*4) /3;
// const inputH = 60;
// // const bannerH = width*500/750;
// const bannerH = width*250/750;
const styles = StyleSheet.create({
  findContainer:{
    flex: 1
  },
  findItem: {
    width: itemW,
    height: itemW,
    margin: padding/2,
  },
  findItemImg:{
    width: itemW,
    height: itemW,
    resizeMode: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  findItemText: {
    backgroundColor: 'transparent',
    fontSize: 14,
    color: '#fff'
  },

  findTitle: {
    paddingLeft: padding/2,
    paddingRight: padding/2,
    paddingTop: padding/2,
    height: 86/2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  findTitleText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#000'
  },

  findScrollContainer: {
    backgroundColor: '#fff',
    marginBottom: 20,
    marginTop: 20,
    paddingLeft: padding/2,
    paddingRight: padding/2,
  },
  findList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: padding/2,
  },
  findItemMore: {
    borderColor: '#e6e6e6',
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  findItemMoreCh: {
    fontSize: 14,
    lineHeight: 20,
    color: '#000'
  },
  findItemMoreEn: {
    fontSize: 11,
    lineHeight: 15,
    color: '#999'
  },

});

export default Find;