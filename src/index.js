import React from 'react';
import { BackHandler } from 'react-native';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { Provider, connect } from 'react-redux';
import { Toast } from 'antd-mobile';
import AppNavigator from './router'
import getStore from './store';

import _g from './config/global.js';

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

const store = getStore(navReducer);

@connect(state => {
  return {
    nav: state.nav
  }
})
class App extends React.Component {
  componentDidMount() {
    if(_g.os === 'android'){
      BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }
  }
  componentWillUnmount() {
    if(_g.os === 'android'){
      BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0 && this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
      return false;
    }
    this.lastBackPressed = Date.now();
    if(nav.index === 0){
      Toast.info('再按一次退出应用', 2, ()=>{}, false);
    }
    dispatch(NavigationActions.back());
    return true;
  };
  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
          navigation={addNavigationHelpers({
              dispatch,
              state: nav
          })}
      />
    );
  }
}


// export default AppRouter;
export default function Root() {
    return (
        <Provider store={store}>
          <App />
        </Provider>
    );
}



// React Native专题
// http://www.lcode.org/react-native/

// LayoutAnimation
// http://www.lcode.org/react-native-api%E6%A8%A1%E5%9D%97%E4%B9%8Blayoutanimation%E5%B8%83%E5%B1%80%E5%8A%A8%E7%94%BB%E8%AF%A6%E8%A7%A3-androidios%E9%80%9A%E7%94%A862/
