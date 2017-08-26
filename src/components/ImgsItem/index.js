import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const {height, width} = Dimensions.get('window');
// c8d2c2   736e6b   
const Item = props => {
  return (
    <TouchableHighlight>
      <View style={styles.item}>
          <Image style={styles.itemImg} source={{uri:'https://dummyimage.com/700x490/736e6b'}} />
          <View style={styles.itemBottom}>
            <View style={styles.itemStyleCount}>
              <Text style={[styles.itemText,styles.itemStyle]}>现代简约</Text>
              <Icon name="md-images" size={20} color='#333' style={styles.countIcon}/>
              <Text style={[styles.itemText,styles.itemCount]}>4图</Text>
            </View>
          </View>
          <Image style={styles.itemTitle} source={{uri: shadowBase64}}>
            <Text style={styles.itemTitleInfo} numberOfLines={1}>现代简约清新效新效果图</Text>
          </Image>
          <Image style={styles.itemAvatar} source={{uri:'https://dummyimage.com/114x114/c8d2c2'}}/>
      </View>
    </TouchableHighlight>
  );
};


const padding = 12;
const imgW = width-padding*2;
const imgH =  imgW / 690*480;
const avatarW = 140/2;
const shadowBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABFCAYAAACL3IzzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMjEyMUY3OTgyNTgxMUU3QkE3M0FFQkVDRjNBMEFDQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMjEyMUY3QTgyNTgxMUU3QkE3M0FFQkVDRjNBMEFDQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjEyMTIxRjc3ODI1ODExRTdCQTczQUVCRUNGM0EwQUNBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEyMTIxRjc4ODI1ODExRTdCQTczQUVCRUNGM0EwQUNBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+kgZ9OgAAADdJREFUeNpiYGBgYGYCEoyoBBMqlxlVDMFFI5hxsYglwDpYyNOGU4wI92HzOYLFAOcyEEsABBgAxxoBFYF1SNYAAAAASUVORK5CYII=';
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
    paddingLeft: 100,
    right: 0,
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

export default Item