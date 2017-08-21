import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width:'100%',
    backgroundColor: 'rgb(16, 142, 233)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 14,
    display: 'flex',
    height: 60
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18
  }
});

export default Header