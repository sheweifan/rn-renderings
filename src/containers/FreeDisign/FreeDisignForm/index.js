import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Toast, ActivityIndicator, Modal } from 'antd-mobile';

import {DesignQuotation_post} from '../../../api/api'
const {height, width} = Dimensions.get('window');



import CityPicker from '../../../components/CityPicker';

// const FormInput = ({placeholder}) => (
// )
// const FormInput = ({placeholder}) => (
//   <TextInput style={styles.formItem} placeholder={placeholder}/>
// )
// 
const initTime = 10;
const phonenumErrorInfoTips = '请输入正确的手机号码';



const infoTipsModal = (info) => Toast.info(info, 0.8);

const CityChose = ({extra='请选择城市',onClick})=> {
  // console.log('propspropspropsprops',props);
  return (<TouchableOpacity 
      onPress={onClick}
      style={[styles.formItem,styles.selectItem]}
    >
      <Text
        style={styles.formItemText}
      >
        {
          extra
        }
      </Text>
      <Icon name="ios-arrow-forward" size={16} color={'#999'} style={styles.selectItemIcon}/>
    </TouchableOpacity>
  )
}

class FreeDisignForm extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => {
    const { params } = navigation.state;
    return {
      headerTitle: '0元设计'
    }
  };
  constructor(props){
    super(props);
    this.state= {
      phonenum: '',
      phonenumError: true,
      verifyCode: '',
      loadingInfo: '',
      codeTime: initTime
    }
  }
  render() {
    const { phonenum, verifyCode , phonenumError, loadingInfo, codeTime } = this.state;
    return (
      <View style={styles.freeDisignForm}>
        <View style={styles.freeDisignFormInner}>
          <Text style={styles.freeDisignFormTitle}>
            全国已有<Text style={styles.freeDisignFormTitleCount}>88440</Text>位业主获得0元设计
          </Text>
          <CityPicker 
            onChange={e=>{
              this.CitySelected = e;
            }}
          >
            <CityChose />
          </CityPicker>
          <View style={styles.formItem}>
            <TextInput 
              style={styles.formItemText}
              placeholderTextColor={'#666'} 
              placeholder={'请输入手机号码'}
              underlineColorAndroid="transparent"
              keyboardType="numeric"
              maxLength={11}
              value={phonenum}
              onChangeText={(phonenum) => this.setState({phonenum},this.phonenumVerify.bind(this))}
              // onBlur={this.phonenumVerify.bind(this)}
            />
            {
              (!phonenumError || phonenum === '')
              ? null
              : <Icon 
                  name="md-alert" 
                  size={28} 
                  style={styles.phonenumErrorIcon}
                  onPress={()=>infoTipsModal(phonenumErrorInfoTips)}
                />
            }
            
          </View>
          <View 
            style={[
              styles.formItem,
              styles.codeItem
            ]}
          >
            <TextInput 
              style={[styles.formItemText,styles.codeItemText]}
              placeholderTextColor={'#666'} 
              placeholder={'验证码'}
              underlineColorAndroid="transparent"
              keyboardType="numeric"
              maxLength={4}
              value={verifyCode}
              onChangeText={(verifyCode) => this.setState({verifyCode})}
            />
            <TouchableOpacity
              // disabled={phonenumError}
              style={[
                styles.formBtn,
                styles.codeItemBtn,
                phonenumError ? styles.formItemDisabled : {}
              ]}
              onPress={this.setCode.bind(this)}
            >
              <Text style={[styles.formItemText,styles.formBtnText,styles.formCodeBtnText]}>
                {
                  this.codeInterval
                  ? codeTime + 's'
                  : '获取验证码'
                
                }

              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            onPress={this.submit.bind(this)}
            style={[
              styles.formItem,
              styles.formBtn,
              !phonenumError && verifyCode.length === 4 ? {} :styles.formItemDisabled
            ]}
          >
            <Text style={[styles.formItemText,styles.formBtnText]}>抢先预约</Text>
          </TouchableOpacity>

          {
            loadingInfo === ''
            ? null
            : <ActivityIndicator toast text={loadingInfo} />
          }

        </View>
        
      </View>
    );
  }
  
  phonenumVerify(){
    const {phonenum} = this.state;

    const phonenumError = !/^0?1[3|4|5|7|8][0-9]\d{8}$/.test(phonenum);
    this.setState({
      phonenumError
    })

    return phonenumError;
  }

  setCode(){

    const {phonenumError} = this.state;

    if(phonenumError){
      infoTipsModal(phonenumErrorInfoTips);
      return;
    }

    if(this.codeInterval){
      return;
    }

    this.setState({
      loadingInfo: '正在发送...'
    })

    setTimeout(()=>{

      this.setState({
        loadingInfo: ''
      })

      alert('假装收到短信验证码5588');


      const fn = ()=>{
        let _codeTime = this.state.codeTime - 1;
        // console.log(_codeTime)
        if(_codeTime === 0){
          _codeTime = initTime;
          clearInterval(this.codeInterval);
          this.codeInterval = null;
        }
        this.setState({
          codeTime: _codeTime
        }); 

      }
      this.codeInterval = setInterval(fn,1000)


    },1000)

  }

  submit(){
    const CitySelected = this.CitySelected;
    const {phonenum, verifyCode, phonenumError } = this.state;

    if(phonenum === '' || phonenumError){
      infoTipsModal(phonenumErrorInfoTips);
      return;
    }

    if(!CitySelected){
      infoTipsModal('请选择城市');
      return;
    }

    if(verifyCode.length !== 4){
      infoTipsModal('请输入验证码');
      return;
    }
    const opts = {
      IsSendSms: true,// 成功后是否发送手机短信
      quoteTel: phonenum,// 手机号
      quoteCode: verifyCode,// 短信验证码
      cityId: CitySelected[1],// 城市ID
    }


    this.setState({
      loadingInfo: '正在提交...'
    })

    // `IsSendSms=${opts.IsSendSms}&cityId=${opts.cityId}&quoteCode=${opts.quoteCode}&quoteTel=${opts.quoteTel}`
    DesignQuotation_post({
      data: opts
    })
     .then(({Success})=>{
        if(Success){
          Toast.success('报名成功，请留意短信',1.5);

          this.setState({
            phonenum: '',
            phonenumError: true,
            verifyCode: '',
            loadingInfo: ''
          })
        }else{
          // Modal.alert(
          //   '提交失败，请稍后重试', 
          //   <Text style={{textAlign: 'center',display: 'flex',padding: 20}}>提交失败，请稍后重试</Text>, 
          //   [{ text: '确定'},]
          // )
          
          this.setState({
            loadingInfo: ''
          })
          Modal.alert(
            '提交失败，请稍后重试', 
            '', 
            [{ text: '确定'},]
          )
        }

     })
  }
}

const padding = 12;
const inputH = 60;
// const bannerH = width*500/750;
const bannerH = width*320/750;
const formItemH = (18*2+18)
const codeBtnH = (9*2+18)
const styles = StyleSheet.create({
  freeDisignForm:{
    margin: padding,
  },
  freeDisignFormInner: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 6,

    shadowOffset: {
      width: 0, 
      height: 0
    }, 
    shadowColor:'black', 
    shadowOpacity: 0.1, 
    shadowRadius: 3,
    elevation: 3,
    borderRadius: 4,
  },
  freeDisignFormTitle: {
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 24,
    paddingBottom: 24,
    color: '#999'
  },
  freeDisignFormTitleCount: {
    color: '#000'
  },



  formItem: {
    borderWidth: 1,
    borderRadius: formItemH/2,
    borderColor: '#e6e6e6',
    marginBottom: padding,


    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  formItemText: {
    backgroundColor: 'transparent',
    padding: 18,
    fontSize: 13,
    lineHeight: 18,
    height: formItemH,

    flex: 1
  },
  selectItem: {
    position: 'relative',
  },
  selectItemIcon: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 20,
    top: (formItemH-16)/2
  },
  formBtn: {
    backgroundColor: '#000',
    borderWidth: 0,
    marginBottom: 0,
  },
  formBtnText: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: '#fff',
  },

  // codeItem: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   alignItems: 'center'
  // },
  // codeItemText: {
  //   flex: 1
  // },
  codeItemBtn: {
    marginRight: padding,
    marginLeft: padding,
    borderRadius: codeBtnH/2,
    height: codeBtnH,

  },
  formCodeBtnText: {
    paddingTop: 8,
    paddingBottom: 0,

  },
  phonenumErrorIcon: {
    marginRight: padding,
    marginLeft: padding,
  },

  formItemDisabled: {
    // opacity: 0.8
    backgroundColor: '#666'
  }
});

export default FreeDisignForm;