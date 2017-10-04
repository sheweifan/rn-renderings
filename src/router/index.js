import React from 'react';
import AppNavigator  from './router';
import { BackHandler } from 'react-native';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { Toast } from 'antd-mobile';
import _g from '../config/global.js';

export const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

@connect(state => {
  return {
    nav: state.nav
  }
})
class Router extends React.Component {
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

export default Router;