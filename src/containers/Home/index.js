import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput } from 'react-native';

const {height, width} = Dimensions.get('window');

const Index = props => {
  return (
    <View >
      <View>
        <Image style={styles.bannerImage} source={{uri:'http://dummyimage.com/600x700/ee735c'}}>
          <TextInput style={styles.searchInput} placeholder="搜索" underlineColorAndroid='transparent'/>
        </Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerImage: {
    width: width,
    height: width*500/750
  },
  searchInput: {
    width:width*0.9,
    height: 50,
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',    
    marginLeft: width*0.05,
    backgroundColor: '#fff',
    borderRadius: 25,
    borderBottomWidth: 0,
    textAlign: 'center',
    marginTop: 24
  }
});

export default Index