import React from 'react';
import { Provider } from 'react-redux';
import Router, {navReducer} from './router'
import getStore from './store';

const store = getStore(navReducer);

export default function Root() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

// React Native专题
// http://www.lcode.org/react-native/

// LayoutAnimation
// http://www.lcode.org/react-native-api%E6%A8%A1%E5%9D%97%E4%B9%8Blayoutanimation%E5%B8%83%E5%B1%80%E5%8A%A8%E7%94%BB%E8%AF%A6%E8%A7%A3-androidios%E9%80%9A%E7%94%A862/
