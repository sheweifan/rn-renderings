import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LoadingState = props => {
  const { loading, style } = props;
  let text = '正在加载中...';
  if(loading == null){
    text = '没有更多了'
  }else if(loading === false){
    text = '上拉加载更多'
  }
  return (
    <View style={[styles.loading, style]}>
      <Text style={styles.loadingText}>
        {
          text
        }
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    paddingBottom: 10
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 24,
    color: '#999'
  },
});

export default LoadingState