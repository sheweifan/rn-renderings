import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Img from '../../components/Img';

import _g from '../../config/global.js';
import designerDetailTopBg from '../../static/images/designerDetail/bg.png';

const {width, height} = Dimensions.get('window');

class DesignerDetail extends React.Component{
  static navigationOptions = {
    title: '吴庭东',
  }
  render(){
    return (
      <View style={styles.designerDetail}>
        <ScrollView contentContainerStyle={styles.designerDetailScroll}>
          <View style={styles.designerDetailTop}>
            <View style={styles.designerDetailTopBg}>
              <Image style={styles.designerDetailTopBgImg} source={designerDetailTopBg}/>
            </View>
            <View style={styles.designerDetailAvatar}>
              <Image style={styles.designerDetailAvatarImg} source={{uri: 'http://dummyimage.com/400x400/999999'}}/>
            </View>
          </View>
          <View style={styles.designerDetailMes}>
            <View style={styles.designerDetailName}>
              <Text style={styles.designerDetailNameText}>吴庭东</Text>
              <Text style={styles.designerDetailLevel}>首席设计师</Text>
            </View>
            <View style={styles.designerDetailDesc}>
              <Text style={styles.designerDetailDescText}>广州市·天河区</Text>
              <Text style={styles.designerDetailDescText}>作品 15</Text>
              <Text style={styles.designerDetailDescText}>签单 35</Text>
            </View>
            <Text style={styles.designerDetailTitle}>个人介绍</Text>
            <View style={styles.designerDetailDesc}>
              <Text style={styles.designerDetailDescText}>设计理念以装饰设计元素为原型设计色彩为参照在设计风格上力求达到色彩风格以及设计元素的高度统一以达到设计风格的高度协调以及设计效果的完美呈现。</Text>
            </View>
          </View>
          
          <View style={styles.designerDetailFloor}>
            <Text style={[styles.designerDetailTitle,styles.designerDetailFloorTitle]}>全部作品</Text>
            <Img />
          </View>
        </ScrollView>
      </View>
    );
  }

}

const avatarW = 250/2
const styles = StyleSheet.create({
  designerDetail: {
    flex: 1,
  },
  designerDetailScroll: {
  },
  designerDetailTop: {
    height: 436/2,
    display: 'flex',
    position: 'relative',
    paddingBottom: 8,
    backgroundColor: '#fff',
  },
  designerDetailTopBg: {
    backgroundColor: '#000',
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  designerDetailTopBgImg: {
    width: width,
    height: 6,
  },
  designerDetailAvatar:{
    position: 'absolute',
    bottom: 2,
    left: width/2 - avatarW/2 - 10,
    width: avatarW+10*2,
    height: avatarW+10*2,
    borderRadius: (avatarW)/2+10,
    borderWidth: 10,
    borderColor: 'rgba(255,255,255,0.3)',
    backgroundColor: 'transparent',

    shadowOffset: {
      width: 0, 
      height: 0
    }, 
    shadowColor:'black', 
    shadowOpacity: 0.8, 
    shadowRadius: 1,
    elevation: 3,
  },
  designerDetailAvatarImg: {
    width: avatarW,
    height: avatarW,
    borderRadius: avatarW/2
  },

  designerDetailMes: {
    paddingBottom: 10,
    backgroundColor: '#fff',
    marginBottom: 20
  },
  designerDetailName: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
    paddingTop: 10
  },
  
  designerDetailNameText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold'
  },
  designerDetailLevel: {
    fontSize: 10,
    lineHeight: 18,
    color: '#000',
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#000',
    paddingLeft: 8,
    paddingRight: 8,
    marginLeft: 8
  },
  designerDetailDesc:{
    paddingTop: 4,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  designerDetailDescText: {
    fontSize: 12,
    lineHeight: 15,
    color: '#999',
    textAlign: 'center',
    paddingLeft: 4,
    paddingRight: 4,
  },
  designerDetailTitle: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 28,
    color: '#000',
    fontWeight: 'bold'
  },


  designerDetailFloor: {
    backgroundColor: '#fff',
    paddingBottom: 10
  },
  designerDetailFloorTitle: {
    paddingTop: 16,
    paddingBottom: 12
  }
})

export default DesignerDetail;