import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const Designer = (props)=>{
  const { 
    CityName,
    AreaName,
    GoodStyle,
    ImageCount,
    DesignerSignNumber,
    NickName,
    FaceImage
  }= props;
  return (
    <TouchableOpacity style={styles.designerItem}>
      <View style={styles.designerItemInner}>
        <Image style={styles.designerItemImg} source={{uri:FaceImage}} />
        <View style={styles.designerItemPresonMes}>
          <Text numberOfLines={1} style={styles.designerItemName}>{NickName}</Text>
          <View style={styles.designerItemLevelAndAddress}>
            <Text style={[styles.designerItemInfo,styles.designerItemLevel]}>{GoodStyle}</Text>
            <Text style={styles.designerItemInfo}>{CityName}·{AreaName}</Text>
          </View>
        </View>
        <View style={styles.designerItemOtherMes}>
          <Text style={styles.designerItemInfo}>作品 {ImageCount}</Text>
          <Text style={styles.designerItemInfo}>签单数 {DesignerSignNumber}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const btnH = 55;
const padding = 12;
const imgW = 140/2;
const styles = StyleSheet.create({
  designerItem: {
    paddingLeft: padding,
    backgroundColor: '#fff'
  },
  designerItemInner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: padding,
    paddingLeft: 0,
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1
  },
  designerItemImg: {
    width: imgW,
    height: imgW,
    borderRadius: imgW/2
  },
  designerItemPresonMes: {
    flex: 1,
    paddingLeft: padding,
    paddingRight: padding
  },
  designerItemInfo: {
    fontSize: 12,
    lineHeight: 21,
    color: '#999'
  },
  designerItemName: {
    fontSize: 16,
    lineHeight: 25,
    color: '#000'
  },
  designerItemLevelAndAddress: {
    display: 'flex',
    flexDirection: 'row',
  },
  designerItemLevel: {
    paddingRight: padding
  },
  designerItemOtherMes: {
    borderLeftWidth: 2,
    borderLeftColor: '#eff0f5',
    paddingLeft: padding
  }

});

export default Designer;
