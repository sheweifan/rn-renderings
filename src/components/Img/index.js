import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const {height, width} = Dimensions.get('window');
// c8d2c2   736e6b   
const Img = props => {
  return (
    <View>
      <View style={styles.list}>
        <TouchableHighlight>
          <View style={styles.item}>
            <Image style={styles.itemImg} source={{uri:'https://dummyimage.com/300x480/736e6b'}} />
            <Image style={styles.itemShadow} source={{uri: shadowBase64}} />
            <Text style={styles.itemTitle} numberOfLines={2}>现代简约清新效新效果图现代简约清新效新效果图</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={styles.item}>
            <Image style={styles.itemImg} source={{uri:'https://dummyimage.com/300x480/736e6b'}} />
            <Image style={styles.itemShadow} source={{uri: shadowBase64}} />
            <Text style={styles.itemTitle} numberOfLines={2}>现代简约清新简约清新效新效果图</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={styles.item}>
            <Image style={styles.itemImg} source={{uri:'https://dummyimage.com/300x480/736e6b'}} />
            <Image style={styles.itemShadow} source={{uri: shadowBase64}} />
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
const shadowBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABFCAYAAACL3IzzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMjEyMUY3OTgyNTgxMUU3QkE3M0FFQkVDRjNBMEFDQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMjEyMUY3QTgyNTgxMUU3QkE3M0FFQkVDRjNBMEFDQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjEyMTIxRjc3ODI1ODExRTdCQTczQUVCRUNGM0EwQUNBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEyMTIxRjc4ODI1ODExRTdCQTczQUVCRUNGM0EwQUNBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+kgZ9OgAAADdJREFUeNpiYGBgYGYCEoyoBBMqlxlVDMFFI5hxsYglwDpYyNOGU4wI92HzOYLFAOcyEEsABBgAxxoBFYF1SNYAAAAASUVORK5CYII=';


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
    height: 44,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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