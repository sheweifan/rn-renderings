import React from 'react';
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
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

import actions,{searchKeyChange, searchSelectChange} from '../../../actions';
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

@connect(
  (state)=>{
    const {searchKey, searchSelected} = state.search;
    return {
      searchKey,
      searchSelected
    }
  },
  (dispatch)=>{
    return {
      goBack: ()=>dispatch(NavigationActions.goBack()),
      searchKeyChange: (text)=> dispatch(actions.searchKeyChange(text)),
      searchSelectChange: (selected)=> dispatch(actions.searchSelectChange(selected)),
      addHistory: (item)=> dispatch(actions.searchHistoryAdd(item)),
      historyVisableChange: (visable) => dispatch(actions.searchHistoryVisableChange(visable))
    }
  }
)
class SearchHeader extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      pageX: 500,
      pageY: 500,
      modelShow: false,
      selectAnimate: new Animated.Value(0),
      selected: 0,
      searchKey: ''
    };
  }
  render(){
    const { pageX, pageY, modelShow, selectAnimate, selected, searchKey } = this.state;
    const { goBack, searchSelected, searchKeyChange, addHistory, historyVisableChange} = this.props;

    return (
      <View style={styles.header}>

        <TouchableOpacity style={styles.headerBack} onPress={()=>goBack()}>
          <Icon name="md-arrow-back" size={28} color="#333"/>
        </TouchableOpacity>

        <View style={styles.headerInner}>
          <TouchableOpacity 
            style={styles.select}
            onPress={this.selectModalChange.bind(this,true)}
            activeOpacity={1}
          >
            <Text style={styles.selectText}>
              { selectData[searchSelected].name }
            </Text>
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
            ref={(input)=>this.input = input}
            autoFocus={true}
            underlineColorAndroid="transparent" 
            placeholder="请输入搜索内容" 
            style={styles.searchInput}
            value={searchKey}
            onChangeText={(sk)=> this.searchKeyChange.call(this,sk)}
            onSubmitEditing={()=> {
              searchKeyChange(searchKey);
              addHistory(searchKey);
              historyVisableChange(false);
              this.input.blur();
            }}
            returnKeyType="search"
            returnKeyLabel="search"
          />

          {
            searchKey === ''
            ? null
            : (<TouchableOpacity style={styles.iconOuter} onPress={this.searchKeyChange.bind(this,'')}>
                <Icon name="md-close" size={18} color="#fff" />
              </TouchableOpacity>)
          }
          
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
                      <TouchableOpacity style={styles.selectItemInner} onPress={this.selectChange.bind(this,i)}>
                        <Text style={styles.selectItemText}>{item.name}</Text>
                      </TouchableOpacity>
                      
                    </Animated.View>
                  )
                )
              }
              <TouchableOpacity 
                onPress={this.selectModalChange.bind(this,false)}
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
  searchKeyChange(text){
    // console.log(text);
    const { historyVisableChange } = this.props;
    this.setState({
      searchKey: text
    },()=>{
      historyVisableChange(true);

      const isFocus = this.input.isFocused();
      if(!isFocus){
        this.input.focus();
      }
    });
  }
  selectModalChange(isOpen){
    const {selectAnimate} = this.state;
    return new Promise((res,rej)=>{
      if(isOpen){

        this.refs.selectTarget.measure((x,y,width,height,pageX,pageY)=>{
          this.setState({
            modelShow: isOpen,
            pageX,
            pageY: pageY - ( _g.os === 'android' ? _g.appOft : 0 ),
          });

          Animated.timing(this.state.selectAnimate, {
            toValue: ( isOpen ? 1 : 0), // 目标值
            duration: 400, // 动画时间
          }).start();
        })
      }else{
        Animated.timing(this.state.selectAnimate, {
            toValue: ( isOpen ? 1 : 0), // 目标值
            duration: 400, // 动画时间
        }).start(()=>{
          // this.setState({
          //   modelShow: isOpen,
          // });
          res();
        });

        setTimeout(()=>{
          this.setState({
            modelShow: isOpen,
          },()=>{
            res();
          });
        },300);

      }
    })

    // console.log(( _g.os === 'android' ? _g.appOft : 0 ),_g.appOft)
    
  }
  componentWillReceiveProps(nextProps){
    const { searchKey } = this.state;
    if(nextProps.searchKey !== searchKey){
      this.setState({
        searchKey: nextProps.searchKey
      },()=>{
        this.input.focus();
      })
    }
  }

  selectChange(idx){
    const { searchSelectChange, historyVisableChange } = this.props;
    this.selectModalChange(false)
      .then(()=>{
        searchSelectChange(idx);
        historyVisableChange(true);
        this.input.focus();
        // this.setState({
        //   selected: idx
        // })
      })
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
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6'
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
    fontSize: 15,
  },
  searchInput: {
    // flexShrink: 0
    flexGrow: 2,
    fontSize: 15,
    height: 30
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
  selectItemInner: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectItemText: {
    color: '#fff',
    fontSize: 12,
  }
})

export default SearchHeader;