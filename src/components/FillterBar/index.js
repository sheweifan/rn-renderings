import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FillterBar = ({items,active,fillterChange})=> {
  return (<View style={[styles.fillterBar]}>
    {
      items.map(
        ({id,text},i)=>(
          <TouchableOpacity style={[styles.fillterBarItem]} key={id}>
            <Text style={styles.fillterBarItemText}>{text}</Text>
            <Icon style={styles.fillterBarItemIcon} name="ios-arrow-down" size={16} color='#a1a1a1' />
            {
              i === items.length-1
              ? null
              : <View style={styles.fillterBarItemLine}></View>
            }
          </TouchableOpacity>
        )
      )
    }
  </View>)
}
const padding = 12;
const styles = StyleSheet.create({
  fillterBar: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: '#ececec',
    borderBottomWidth: 1,
    height: 45,
    position: 'relative'
  },
  fillterBarItem: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fillterBarItemText: {
    fontSize: 13,
    color: '#000',
  },
  fillterBarItemIcon: {
    marginLeft: 7,
    marginTop: 4
  },
  fillterBarItemLine: {
    width: 1,
    height: 20,
    backgroundColor: '#ececec',
    position: 'absolute',
    right: 0,
    top: (45-20)/2
    // alignSelf: 'flex-end'
  }
})

export default FillterBar;
