import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Carousel, Toast } from 'antd-mobile';
import Icon from 'react-native-vector-icons/Ionicons';

import { RealImg_get, ImgBaseInfo_get } from '../../api/api';
import LoadingState from '../../components/LoadingState';


const {width, height} = Dimensions.get('window');

class ImageView extends React.Component{
  static navigationOptions = {
    header: null
  }
  constructor(props){
    super(props);
    // 页面传值
    this.params = props.navigation.state.params || {
      id: 540000198704095400,
      type: 'img',
    }
    this.state={
      selectedIndex: 0,
      data: null
    }
  }
  afterChange(current){
    this.setState({
      selectedIndex: current
    })
  }
  render(){
    const { navigation } = this.props;
    const { selectedIndex, data } = this.state;
    return (
      <View style={styles.detailContainer}>
        {
          data == null
          ? <View style={styles.loading}>
              <LoadingState loading={true} />
            </View>
          : <View>
              <Carousel 
                style={styles.swiper} 
                dots={false} 
                selectedIndex={selectedIndex}
                afterChange={this.afterChange.bind(this)}
              >
                {
                  data.imglist.map(
                    (item, i)=>(
                      <Image style={styles.swiperImg} source={{uri: item.ImageUrl}} key={i} />
                    )
                  )
                }
              </Carousel>
              <View style={styles.design}>
                <View style={styles.designInner}>
                  {
                    data.DesignerInfo
                    ? <Image style={styles.designAvatar} source={{uri: data.DesignerInfo.FaceImage}}/>
                    : null
                  }
                  <Text style={styles.imgDesc}>
                    { data.imglist[selectedIndex].TitleName }
                  </Text>
                  {
                    data.imglist.length > 1
                    ? <Text style={styles.swiperProgress}>
                      {selectedIndex+1}/{data.imglist.length}
                    </Text>
                    : null
                  }
                  
                </View>
              </View>
            </View> 
        }
        {
          // <TouchableOpacity style={styles.fixedBtn}>
          //   <Text style={styles.fixedBtnText}>0元设计</Text>
          // </TouchableOpacity>
        }
        <TouchableOpacity 
          style={styles.goback}
          onPress={()=> navigation.goBack()}
        >
          <Icon name="md-arrow-back" size={28} style={styles.gobackIcon} color='#fff'/>
        </TouchableOpacity>
      </View>
    )
  }
  async componentDidMount(){
    const { id, type } = this.params;
    const api = type === 'imgs'? ImgBaseInfo_get : RealImg_get;
    const data = await api({ params:{ id } });

    if( data.Success ){
      this.setState({
        data: data.Data
      })
    }
  }
}

const btnH = 55;
const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    backgroundColor: '#000'
  },
  goback: {
    position: 'absolute',
    left: 10,
    top: 30,
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  gobackIcon: {
    backgroundColor: 'transparent'
  },
  loading: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  swiper: {
    height: height,
  },
  swiperItem: {
    height: height,
    width: width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  swiperImg: {
    flex: 1,
    resizeMode: 'contain'
  },
  swiperItemText: {
    fontSize: 24,
    color: '#fff'
  },
  fixedBtn: {
    backgroundColor: '#ffbd00',
    height: btnH,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fixedBtnText: {
    color: '#fff',
  },
  design: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  designInner: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  designAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  imgDesc: {
    fontSize: 16,
    flex: 1,
    color: '#fff',
    marginRight: 10,
    marginLeft: 10,
  },
  swiperProgress: {
    fontSize: 16,
    color: '#fff',
  }
})


export default ImageView;
