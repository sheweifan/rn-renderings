import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, ScrollView,TouchableOpacity,FlatList } from 'react-native';

import List from '../../components/List';
import Imgs from '../../components/Imgs';
import HomeTop from './HomeTop';

import actions from '../../actions';
const {height, width} = Dimensions.get('window');

import { TXgt_get } from '../../api/api'

import icon_index from '../../static/images/nav/icon_index.png'
import icon_index_active from '../../static/images/nav/icon_index_active.png'

@connect(
  (state)=>({}),
  (dispatch)=>{
    return {
      locationInit: ()=> dispatch(actions.locationInit())
    }
  }
)
class Index extends React.Component {
  static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon: ({focused}) => {
      // console.log(a)
      return <Image
          source={focused?icon_index_active:icon_index}
          style={[{
            height: 25,
            width: 25,
            resizeMode: 'contain'
          }]}
      />
    },
    header: null
  };
  constructor(props){
    super(props);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <List 
        style={styles.container}
        api={TXgt_get}
        ListHeaderComponent={<HomeTop navigate={navigate} />}
        renderItem={({item,index})=>{
          return <Imgs key={index} {...item}/>
        }}
        params={{order:1}}
      >
      </List>
      );
  }
  componentDidMount(){
    this.props.locationInit();
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
});

export default Index;