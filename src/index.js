import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { SegmentedControl, WingBlank, TabBar } from 'antd-mobile';
import Index from './containers/Home';
import Detail from './containers/Detail';
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
  Home: { screen: Index },
  Detail: { screen: Detail },
});