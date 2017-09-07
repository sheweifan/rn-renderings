import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

// class Tab extends React.Component{
//  constructor(){
//    super();
//  }
//   render(){
//     return (<View style={[styles.tab]}>
//      <TouchableOpacity style={[styles.tabItem,styles.tabItemActive]}>
//        <Text style={[styles.tabItemText,styles.tabItemTextActive]}>装修效果图</Text>
//      </TouchableOpacity>
//      <TouchableOpacity style={[styles.tabItem]}>
//        <Text style={[styles.tabItemText]}>装修效果图</Text>
//      </TouchableOpacity>
//     </View>)
//   }
// }

const Tab = ({items,active,tabChange})=> {
  return (<View style={[styles.tab]}>
    {
      items.map(
        (item,i) => (
          <TouchableOpacity 
            activeOpacity="1"
            style={[
              styles.tabItem,
              (active===item.id?styles.tabItemActive:{})
            ]} 
            key={item.id} 
            onPress={ ()=>tabChange(item.id) }
          >
            <Text 
              style={[
                styles.tabItemText,
                (active===item.id?styles.tabItemTextActive:{})
              ]}
            >
              {item.text}
            </Text>
          </TouchableOpacity>
        )
      ) 
    }
  </View>)
}
const padding = 12;
const styles = StyleSheet.create({
  tab:{
    display: 'flex',
    flexDirection: 'row',
    flex: 1
  },
  tabItem:{
    paddingLeft: padding/2,
    paddingRight: padding/2,
    marginLeft: padding/2,
    marginRight: padding/2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabItemText: {
    color: '#666',
    fontSize: 16
  },
  tabItemActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#000'
  },
  tabItemTextActive: {
    color: '#000',
    fontWeight: 'bold'
  }
})

export default Tab;
