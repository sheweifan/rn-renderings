import React from 'react';
import _ from 'lodash';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, ScrollView,TouchableOpacity,FlatList } from 'react-native';

import LoadingState from '../LoadingState';

// import Detail from '../../containers/Detail';
// import LinearGradient from 'react-native-linear-gradient';
// import LinearGradient from 'react-native-linear-gradient'; 
//  http://ionicframework.com/docs/ionicons/
const {height, width} = Dimensions.get('window');
const initState = {
  data: [],
  loading: true,
  refreshing: false
}
class List extends React.Component {
  constructor(props){
    super(props);
    this.state = initState;
  }
  render() {
    const { data, loading, refreshing } = this.state;
    const { navigate } = this.props.navigation || function() {} ;
    
    return (
      <FlatList 
        data={data}
        keyExtractor={(item, index) => ( item.EpId || index )}
        onEndReached={this.loadMore.bind(this)}
        ListFooterComponent={<LoadingState loading={loading}/>}
        refreshing={refreshing}
        onRefresh={this.refresh.bind(this)}
        {...this.props}
      >
      </FlatList>
      );
  }
  loadData(idx){
    const { pageIndex, CountPage, state, props } = this;
    let { loading,data } = state;
    const { api,params } = props;
    // if(loading || pageIndex >= CountPage) {
    //   loading = null;
    //   return;
    // }
    this.pageIndex = idx;
    loading = true
    this.setState({
      loading
    })
    api({
      params: {
        pageSize: 10,
        pageIndex: pageIndex,
        ...(params || {})
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
          loading,
          refreshing: false
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
      refreshing: true
    },()=>{
      this.loadData.bind(this)(1)
    });
  
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
  componentWillReceiveProps(nextProps){
    // console.log(11111,this.props.params, nextProps.params, _.isEqual(this.props.params, nextProps.params));
    if(_.isEqual(this.props.params, nextProps.params)) return;
    this.setState(initState,()=>{
      this.loadData.bind(this)(1);
    })
    
  }
}
// const bannerH = width*250/750;
const styles = StyleSheet.create({
  
});

export default List;