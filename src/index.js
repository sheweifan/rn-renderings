import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { SegmentedControl, WingBlank, TabBar } from 'antd-mobile';
import Index from './containers/Home';
import Detail from './containers/Detail';
import Search from './containers/Search';
import { StackNavigator } from 'react-navigation';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Index />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default StackNavigator({
  Search: { screen: Search },
  Home: { screen: Index },
  Detail: { screen: Detail },
});


// React Native专题
// http://www.lcode.org/react-native/

// LayoutAnimation
// http://www.lcode.org/react-native-api%E6%A8%A1%E5%9D%97%E4%B9%8Blayoutanimation%E5%B8%83%E5%B1%80%E5%8A%A8%E7%94%BB%E8%AF%A6%E8%A7%A3-androidios%E9%80%9A%E7%94%A862/


