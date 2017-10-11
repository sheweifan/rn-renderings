import React from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const {height, width} = Dimensions.get('window');
// c8d2c2   736e6b   
import shadowImg from '../../static/images/itembg.png';

const Img = ({ImageUrl, TitleName, Id, index, navigate}) => {
  return (
    <TouchableHighlight
      onPress={()=>{ 
        navigate({
          routeName: 'ImageView',
          params: {
            type: 'img',
            id: Id
          }
        })
      }}
    >
      <View style={styles.item}>
        <Image style={styles.itemImg} source={{uri: ImageUrl}} />
        <Image style={styles.itemShadow} source={shadowImg} />
        <Text style={styles.itemTitle} numberOfLines={2}>{TitleName}</Text>
      </View>
    </TouchableHighlight>
  );
};


const padding = 6;
const itemW = (width-padding*6)/2;
const itemH = itemW*450/320;

const styles = StyleSheet.create({
  list:{
    paddingLeft: padding,
    paddingRight: padding,
  },
  item: {
    width: itemW,
    height:itemH,
    margin: padding,
    position: 'relative',
    display: 'flex',
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

export default connect(
  (state)=>{
    return {}
  },
  (dispatch)=>{
    return {
      navigate: (path)=>dispatch(NavigationActions.navigate(path))
    }
  }
)(Img);