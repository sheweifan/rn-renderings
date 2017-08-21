import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SegmentedControl, WingBlank, TabBar } from 'antd-mobile';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.header}><Text>navbar</Text></View>
       <TabBar>
        <TabBar.Item title="fuck"></TabBar.Item>
        <TabBar.Item title="fuck"></TabBar.Item>
        <TabBar.Item title="fuck"></TabBar.Item>
        <TabBar.Item title="fuck"></TabBar.Item>
       </TabBar>
      </View>
    );
  }
  componentDidMount(){
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    width:'100%',
    height: 90,
    backgroundColor: '#e5e5e5',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
