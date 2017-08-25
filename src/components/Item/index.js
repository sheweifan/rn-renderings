import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');
//c8d2c2   736e6b  
const Item = props => {
  return (
    <View style={styles.item}>
      <Image style={styles.itemImg} source={{uri:'https://dummyimage.com/700x490/736e6b'}} />
      <View style={styles.itemBottom}>
        <Image source={{uri: bottomShadowBg}} style={styles.bottomShadowBg} />
        <View style={styles.bottomShadowBox}>
          <View style={styles.itemAvatar}>
            <Image style={styles.itemAvatarImg} source={{uri:'https://dummyimage.com/114x114/c8d2c2'}}/>
          </View>
          <Text numberOfLines={1} style={[styles.itemText,styles.itemTitle]}>现代简约清新效果图现代简约清新效果图现代简约清新效果图</Text>
          <Text style={styles.itemText}>现代简约</Text>
          <Text style={styles.itemText}>4图</Text>
        </View>
      </View>
    </View>
  );
};

const padding = 12;
const imgW = width - padding*2;
const avatarW = imgW*0.16;
const bottomShadowBg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAB0CAYAAABNEfiBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDFCNkJFQzk2MTU3MTFFNzhCN0ZDODA1NDlDRDU3NjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDFCNkJFQ0E2MTU3MTFFNzhCN0ZDODA1NDlDRDU3NjUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMUI2QkVDNzYxNTcxMUU3OEI3RkM4MDU0OUNENTc2NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMUI2QkVDODYxNTcxMUU3OEI3RkM4MDU0OUNENTc2NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrT9VdUAAAEDSURBVHja3FbLEoMwCGSJ///LdMxMLFkhom0vzcFxcJfHhhAhIpD32t9tf6jQ2gg5GTttuFBHP1wxsr97n/A+T9GVUYOuJXqUpzC9f4zK1Mgn0kDqxYhSMq59QjankHBKyKL35IfyfgOv8zxE2RzdIummPDcq0xg5RQfX3oiOy42bjC1CstGiMuGRFu37JHLLpKsbfc9LFF1YJcmMVqrdspRsGb1WUfsB8hkdS0FCJLe3DvpyMtyrCKWKrIwMB8vDVrxUKRwC3zgIy1OMrGnXKYH9+t08hNbgHK2nTX3OfzCsQHP+MOrzQKem1WywIJrJbJT0kkL5yODWj0R46f+58SXAAN+RLKeqTB/1AAAAAElFTkSuQmCC';

const styles = StyleSheet.create({
  item: {
    // marginLeft: padding,
    // marginRight: padding,
    width: imgW,
    height: imgW/700*490,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    borderRadius: 10,
    borderBottomLeftRadius: avatarW/2,
    overflow: 'hidden',
  },
  itemImg: {
    flex:1,
    display: 'flex',
    flexDirection: 'column-reverse',
    backgroundColor: 'transparent'

  },
  itemBottom:{
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom:0,
    left:0,
    right: 0
  },
  bottomShadowBg: {
    resizeMode: 'stretch',
    height: avatarW,
    width: imgW,
  },
  bottomShadowBox:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom:0,
    left:0,
    right: 0
  },
  itemAvatar:{
    width: avatarW,
    height: avatarW,
    borderRadius: avatarW/2,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.2)',
    overflow: 'hidden'
  },
  itemAvatarImg: {
    // flex: 1,
    width: avatarW-4,
    height: avatarW-4,
    borderRadius: (avatarW-4)/2,
    overlayColor: 'transparent',
    resizeMode: 'cover'
  },
  itemText:{
    color: '#fff',
    // flexGrow: 1,
    textAlign: 'center',
    backgroundColor: 'transparent',
    fontSize: 12,
    paddingRight: padding
  },
  itemTitle: {
    fontSize: 17,
    // flexGrow: 1,
    flex: 1,
    textAlign: 'left',
    paddingLeft: padding
  }
});

export default Item