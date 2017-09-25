import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, ScrollView,TouchableOpacity,FlatList } from 'react-native';

import Img from '../../components/Img';
import HomeTop from './HomeTop';
import Imgs from '../../components/Imgs';
import LoadingState from '../../components/LoadingState';

import icon_index from '../../static/images/nav/icon_index.png'
import icon_index_active from '../../static/images/nav/icon_index_active.png'

// import Detail from '../../containers/Detail';
// import LinearGradient from 'react-native-linear-gradient';
// import LinearGradient from 'react-native-linear-gradient'; 
//  http://ionicframework.com/docs/ionicons/
const {height, width} = Dimensions.get('window');

import { TXgt_get } from '../../api/api'


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
    this.state = {
      data: [],
      loading: true
    }
  }
  render() {
    const { data, loading } = this.state;
    const { navigate } = this.props.navigation;
    
    return (
      <FlatList 
        data={data}
        style={styles.container}
        ListHeaderComponent={<HomeTop navigate={navigate} />}
        keyExtractor={(item, index) => item.EpId}
        renderItem={({item,index})=>{
          return <Imgs key={index} {...item}/>
        }}
        onEndReached={this.loadMore.bind(this)}
        ListFooterComponent={<LoadingState loading={loading}/>}
        refreshing={false}
        onRefresh={this.refresh.bind(this)}
      >
      </FlatList>
      );
  }
  loadData(idx){
    const { pageIndex, CountPage, state } = this;
    let { loading,data } = state;
    // if(loading || pageIndex >= CountPage) {
    //   loading = null;
    //   return;
    // }
    this.pageIndex = idx;
    loading = true
    this.setState({
      loading
    })
    TXgt_get({
      params: {
        pageSize: 10,
        pageIndex: pageIndex
      }
    })
      .then(({Data,CountPage})=>{
        const newData = data.concat(Data);
        let loading = false;
        if(CountPage === idx){
          loading = null;
        }

        this.setState({
          data: newData,
          loading
        })

        this.CountPage = CountPage;
      })
  }
  componentDidMount(){
    this.loadData.bind(this)(1);
  }
  refresh(){
    this.setState({
      data: [],
    },()=>this.loadData.bind(this)(1));
  }
  loadMore(){
    const { pageIndex, CountPage, state } = this;
    let { loading,data } = state;
    if(loading || loading== null) {
      loading = null;
      return;
    }
    this.pageIndex = pageIndex+ 1;
    this.loadData.bind(this)(this.pageIndex);
  }
}
// const bannerH = width*250/750;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
});

export default Index;