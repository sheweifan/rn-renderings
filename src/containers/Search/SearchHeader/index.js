import React from 'react';
import { 
  StyleSheet,
  Text,
  View, 
  Image, 
  Dimensions, 
  TouchableOpacity, 
  TextInput,
  Animated,
  Easing,
  Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import _g,{ os, appOft } from '../../../config/global';

const selectData = [
  {
    name: '套图',
    left: 90,
    top: -12
  },
  {
    name: '单图',
    left: 59,
    top: 61
  },
  {
    name: '设计师',
    left: -13,
    top: 90
  }
]

class SearchHeader extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      pageX: 500,
      pageY: 500,
      modelShow: false,
      selectAnimate: new Animated.Value(0)
    };

  }
  render(){
    const { pageX, pageY, modelShow, selectAnimate} = this.state;
    return (
      <View style={styles.header}>

        <View style={styles.headerBack}>
          <Icon name="md-arrow-back" size={28} color="#333"/>
        </View>

        <View style={styles.headerInner}>
          <TouchableOpacity 
            style={styles.select}
            onPress={this.selectChange.bind(this,true)}
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
            <View style={[styles.modalOuter,{
              marginLeft: pageX,
              marginTop: pageY,
            }]}>
              {
                selectData.map(
                  (item,i)=> (
                    <Animated.View 
                      key={i}
                      style={[
                        styles.selectItem,
                        styles['selectItem'+i],
                        {
                          opacity: selectAnimate.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1],
                          }),
                          transform: [
                            {
                              scale:selectAnimate.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 1],
                              }),
                            },
                            {
                              translateX: selectAnimate.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, item.left+iconW/2],
                              }),
                            },
                            {
                              translateY: selectAnimate.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, item.top+iconW/2],
                              }),
                            }
                          ]
                        }
                      ]} 
                    >
                      <Text style={styles.selectItemText}>{item.name}</Text>
                    </Animated.View>
                  )
                )
              }
              <TouchableOpacity 
                onPress={this.selectChange.bind(this,false)}
                style={[styles.iconOuter,styles.iconSelect]}
              >
                <Icon name="md-close" size={18} color="#fff" />
              </TouchableOpacity>
              
            </View>
          </View>
        </Modal>
      </View>
    )
  }
  componentDidMount(){

    // setTimeout(()=>{
    //   this.selectChange();
    // },50)

  }
  selectChange(isOpen){
    const {selectAnimate} = this.state;

    if(isOpen){

      this.refs.selectTarget.measure((x,y,width,height,pageX,pageY)=>{
        this.setState({
          modelShow: isOpen,
          pageX,
          pageY: pageY - ( _g.os === 'android' ? _g.appOft : 0 )
        });

        Animated.timing(this.state.selectAnimate, {
            toValue: ( isOpen ? 1 : 0), // 目标值
            duration: 500, // 动画时间
        }).start();
      })
    }else{
      Animated.timing(this.state.selectAnimate, {
          toValue: ( isOpen ? 1 : 0), // 目标值
          duration: 500, // 动画时间
      }).start(()=>{
        // this.setState({
        //   modelShow: isOpen,
        // });
      });

      setTimeout(()=>{
        this.setState({
          modelShow: isOpen,
        });
      },350)

    }




  }
}
// console.log(2222,global.appOft)
const InputH = 48;
const searchBarPaddingTop = 24;
const selectItemW = 55;
const iconW = 30;
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
    width: iconW,
    height: iconW,
    borderRadius: iconW/2,
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
  modalOuter:{
    position: 'relative',
  },
  iconSelect: {
    backgroundColor: '#000',
    marginLeft: 0,
    marginRight: 0,
  },
  selectMask: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.9)'
    backgroundColor: 'rgba(255,255,255,0.8)'
  },
  selectItem: {
    width: selectItemW,
    height: selectItemW,
    borderRadius: selectItemW/2,
    marginLeft: -iconW/2,
    marginTop: -iconW/2,
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  selectItem0: {
    backgroundColor: '#3c3cb4',
  },
  selectItem1: {
    backgroundColor: '#7d50be',
  },
  selectItem2: {
    backgroundColor: '#07c0e7',
  },
  selectItemText: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 24
  }
})

export default SearchHeader;