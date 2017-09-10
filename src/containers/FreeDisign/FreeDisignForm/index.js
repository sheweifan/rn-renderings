import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const {height, width} = Dimensions.get('window');

// const FormInput = ({placeholder}) => (
// )
// const FormInput = ({placeholder}) => (
//   <TextInput style={styles.formItem} placeholder={placeholder}/>
// )

class FreeDisignForm extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => {
    const { params } = navigation.state;
    return {
      headerTitle: '0元设计'
    }
  };
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.freeDisignForm}>
        <View style={styles.freeDisignFormInner}>
          <Text style={styles.freeDisignFormTitle}>
            全国已有<Text style={styles.freeDisignFormTitleCount}>88440</Text>位业主获得0元设计
          </Text>

          <View style={[styles.formItem,styles.selectItem]}>
            <TextInput 
              style={styles.formItemText}
              placeholderTextColor={'#666'} 
              editable={false} 
              placeholder={'请选择城市'}
              underlineColorAndroid="transparent"
            />
            <Icon name="ios-arrow-forward" size={16} color={'#999'} style={styles.selectItemIcon}/>
          </View>
          <View style={styles.formItem}>
            <TextInput 
              style={styles.formItemText}
              placeholderTextColor={'#666'} 
              placeholder={'请输入手机号码'}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={[styles.formItem,styles.codeItem]}>
            <TextInput 
              style={[styles.formItemText,styles.codeItemText]}
              placeholderTextColor={'#666'} 
              placeholder={'验证码'}
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity style={[styles.formItem,styles.formBtn,styles.codeItemBtn]}>
              <Text style={[styles.formItemText,styles.formBtnText,styles.formCodeBtnText]}>获取验证码</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={[styles.formItem,styles.formBtn]}>
            <Text style={[styles.formItemText,styles.formBtnText]}>抢先预约</Text>
          </TouchableOpacity>

        </View>


      </View>
    );
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
  },
  formItemText: {
    padding: 18,
    fontSize: 13,
    lineHeight: 18,
    height: formItemH,
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

  codeItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  codeItemText: {
    flex: 1
  },
  codeItemBtn: {
    marginRight: padding,
    marginLeft: padding,
    borderRadius: codeBtnH/2,
    height: codeBtnH,

  },
  formCodeBtnText: {
    paddingTop: 8,
    paddingBottom: 0,
  }

});

export default FreeDisignForm;