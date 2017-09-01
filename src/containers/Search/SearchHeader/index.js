import React from 'react';
import { 
  StyleSheet,
  Text,
  View, 
  Image, 
  Dimensions, 
  TouchableOpacity, 
  TextInput,
  Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Global from '../../../config/global.js';

class SearchHeader extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      pageX: 500,
      pageY: 500,
      modelShow: false
    }
  }
  render(){
    const { pageX, pageY, modelShow } = this.state;
    return (
      <View style={styles.header}>

        <View style={styles.headerBack}>
          <Icon name="md-arrow-back" size={28} color="#333"/>
        </View>

        <View style={styles.headerInner}>
          <TouchableOpacity 
            style={styles.select}
            onPress={this.selectChange.bind(this)}
          >
            <Text style={styles.selectText}>单图单</Text>
            <View
              style={styles.iconOuter} 
              ref="selectTarget"
            >
              <Icon 
                name="ios-arrow-down" 
                size={20} 
                color="#fff" 
                style={styles.selectIcon}
              />
            </View>
          </TouchableOpacity>

          <TextInput 
            underlineColorAndroid="transparent" 
            placeholder="请输入搜索内容" 
            style={styles.searchInput}
          />

          <View style={styles.iconOuter}>
            <Icon name="md-close" size={18} color="#fff" />
          </View>

        </View>

        <Modal
          animationType="none"
          transparent={true}
          visible={modelShow}
          onRequestClose={() => {}}
        >
          <View 
            style={styles.selectMask} 
            ref="model"
          >
            <View style={[styles.iconOuter,styles.closeSelect,{
              marginLeft: pageX
            }]}>
              <Icon name="md-close" size={18} color="#fff" />
            </View>
          </View>
        </Modal>
      </View>
    )
  }
  componentDidMount(){

    // <View style={styles.selectMask}></View>
    // <Modal
    //   animationType="none"
    //   transparent={true}
    //   visible={true}
    //   >
    // </Modal>
    // var tag = findNodeHandle(this.refs.selectTarget)
    // console.log(this.selectTarget);
    // console.log(findNodeHandle(this.selectTarget));
    // this.refs.selectTarget.measure((x,y,width,height,pageX,pageY)=>{
    //     console.log(x,y,width,pageX,pageY,height);
    // })
    // setTimeout(()=>{
    //   this.refs.selectTarget.measure((x,y,width,height,pageX,pageY)=>{
    //     this.setState({
    //       pageX,
    //       pageY
    //     })
    //   })
    // },1500)
  }
  selectChange(){
    // var tag = findNodeHandle(this.refs.selectTarget)
    // console.log(this.selectTarget);
    // console.log(findNodeHandle(this.selectTarget));
    // console.log(this.selectIcon)
    this.refs.selectTarget.measure((x,y,width,height,pageX,pageY)=>{
      this.setState({
        modelShow: true,
        pageX
      });
    })

  }
}
console.log(2222,global.appOft)
var InputH = 48;
var searchBarPaddingTop = 24;
const styles = StyleSheet.create({
  header: {
    paddingTop: searchBarPaddingTop,
    paddingBottom: 12,
    paddingRight: 12,
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    // height: 50
    alignItems: 'center'
  },
  headerInner: {
    // flexShrink: 0,
    flexGrow: 2,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#eff0f5',
    height: InputH,
    borderRadius: InputH/2,
    alignItems: 'center',
    paddingRight: 12,
  
  },
  headerBack: {
    width: InputH,
    height: InputH,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  select: {
    // width: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#fff',
    height: 30,
    marginRight: 12,
    paddingRight: 12,
    paddingLeft: 12
  },
  selectText: {
    fontSize: 15
  },
  searchInput: {
    // flexShrink: 0
    flexGrow: 2,
    fontSize: 15
  },
  iconOuter: {
    width: 30,
    height: 30,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b3b3b3',
    marginLeft: 5
  },
  selectIcon: {
    backgroundColor: 'transparent',
    marginTop: 3,
  },
  closeSelect:{
    // position: 'absolute',
    backgroundColor: '#000',
    marginLeft: 0,
    marginRight: 0,
    marginTop: searchBarPaddingTop - ( Global.os === 'android' ? Global.appOft : 0 )
  },
  selectMask: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.9)'
    backgroundColor: 'rgba(255,255,255,0.8)'
  }
})

export default SearchHeader;