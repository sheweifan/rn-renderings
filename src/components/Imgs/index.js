import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const {height, width} = Dimensions.get('window');
// c8d2c2   736e6b   
import shadowImg from '../../static/images/itembg.png';
const Imgs = props => {
  const { CoverImageUrl, FaceImage, TitleName, ImgCount, StyleName } = props;
  return (
    <View>
      <TouchableHighlight>
        <View style={styles.item}>
            <Image style={styles.itemImg} source={{uri: CoverImageUrl}} />
            <View style={styles.itemBottom}>
              <View style={styles.itemStyleCount}>
                <Text style={[styles.itemText,styles.itemCount]}>{ ImgCount }图</Text>
                <Icon name="md-images" size={20} color='#333' style={styles.countIcon}/>
                <Text style={[styles.itemText,styles.itemStyle]}>{ StyleName }</Text>
              </View>
            </View>
            <Image style={styles.itemTitle} source={shadowImg}>
              <Text style={styles.itemTitleInfo} numberOfLines={1}>{ TitleName }</Text>
            </Image>
            <Image style={styles.itemAvatar} source={{uri: FaceImage}}/>
        </View>
      </TouchableHighlight>
    </View>
  );
};


const padding = 12;
const imgW = width-padding*2;
const imgH =  imgW / 690*400;
const avatarW = 140/2;
const styles = StyleSheet.create({
  item: {
    marginLeft: padding,
    marginRight: padding,
    position: 'relative',
    // overflow: 'hidden',
    marginBottom: 12,

    shadowOffset: {
      width: 2, 
      height: 2
    }, 
    shadowColor:'black', 
    shadowOpacity: 0.1, 
    shadowRadius: 5,
    elevation: 2,
    // borderWidth: 1,
    // borderColor: 'transparent'
    borderRadius: 1
  },
  itemImg: {
    width: imgW,
    height: imgH,
  },
  itemBottom: {
    backgroundColor: '#fff',
  },
  itemAvatar: {
    width: avatarW,
    height: avatarW,
    borderRadius: avatarW/2,
    position: 'absolute',
    left: 15,
    bottom: 16
  },
  itemTitle: {
    position: 'absolute',
    left: 0,
    width: imgW,
    paddingLeft: 100,
    paddingRight:20,
    bottom: 45,
    height: 42,
    display: 'flex',
    justifyContent: 'center',
    resizeMode: 'stretch'
  },
  itemTitleInfo: {
    color: '#fff',
    fontSize: 12,
  },
  itemStyleCount:{
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    height: 45,
    backgroundColor: 'transparent'
  },
  itemText:{
    fontSize: 12,
    color: '#000',
    paddingRight: 15
  },
  countIcon: {
    paddingRight: 5
  }
});

export default Imgs