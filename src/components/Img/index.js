import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const {height, width} = Dimensions.get('window');
// c8d2c2   736e6b   
import shadowImg from '../../static/images/itembg.png';

const Img = props => {
  return (
    <View>
      <View style={styles.list}>
        <TouchableHighlight>
          <View style={styles.item}>
            <Image style={styles.itemImg} source={{uri:'https://dummyimage.com/300x480/736e6b'}} />
            <Image style={styles.itemShadow} source={shadowImg} />
            <Text style={styles.itemTitle} numberOfLines={2}>现代简约清新效新效果图现代简约清新效新效果图</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={styles.item}>
            <Image style={styles.itemImg} source={{uri:'https://dummyimage.com/300x480/736e6b'}} />
            <Image style={styles.itemShadow} source={shadowImg} />
            <Text style={styles.itemTitle} numberOfLines={2}>现代简约清新简约清新效新效果图</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={styles.item}>
            <Image style={styles.itemImg} source={{uri:'https://dummyimage.com/300x480/736e6b'}} />
            <Image style={styles.itemShadow} source={shadowImg} />
            <Text style={styles.itemTitle} numberOfLines={2}>现代简新效新图</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};


const padding = 6;
const itemW = (width-padding*6)/2;
const itemH = itemW*450/320;

const styles = StyleSheet.create({
  list:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: padding,
    paddingRight: padding,
  },
  item: {
    width: itemW,
    height:itemH,
    margin: padding,
    position: 'relative',
  },
  itemImg: {
    flex: 1,
  },
  itemShadow: {
    width: itemW,
    height: 44,
    position: 'absolute',
    bottom: 0,
    left: 0,
    resizeMode: 'stretch',
  },
  itemTitle:{
    position: 'absolute',
    bottom: 6,
    left: 10,
    right: 10,
    fontSize: 14,
    lineHeight: 12*1.5,
    color: '#fff'
  }
});

export default Img