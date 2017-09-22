import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Carousel, Toast } from 'antd-mobile';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const imglist = [
  {
    imgId: 1,
    imgUrl: 'http://dummyimage.com/600x700/ee735c'
  },
  {
    imgId: 2,
    imgUrl: 'https://dummyimage.com/500x999/ffffe7/000.png&text=test+image+2'
  },
  {
    imgId: 3,
    imgUrl: 'https://dummyimage.com/600x400/000fe7/ffffff.png&text=test+image+3'
  },
]


class ImageView extends React.Component{
  static navigationOptions = {
    title: 'ImageView',
    header: null
  }
  constructor(props){
    super(props);
    this.state={
      selectedIndex: 0
    }
  }
  afterChange(current){
    this.setState({
      selectedIndex: current
    })
  }
  render(){
    const { navigation } = this.props;
    const { selectedIndex } = this.state;
    return (
      <View Style={styles.detailContainer}>
        <Carousel 
          style={styles.swiper} 
          dots={false} 
          selectedIndex={selectedIndex}
          afterChange={this.afterChange.bind(this)}
        >
          {
            imglist.map(
              (item)=>(
                <Image style={styles.swiperImg} source={{uri: item.imgUrl}} key={item.imgId} />
              )
            )
          }
        </Carousel>
        <View style={styles.design}>
          <View style={styles.designInner}>
            <Image style={styles.designAvatar} source={{uri: 'https://dummyimage.com/140x140/f700ff/000.png&text=avatar'}}/>
            <Text style={styles.imgDesc}>
              现代简约客厅电视背景墙激情装修效修效果图现代简约客厅电视
            </Text>
            <Text style={styles.swiperProgress}>
              {selectedIndex+1}/{imglist.length}
            </Text>
          </View>
        </View>
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
}

const btnH = 55;
const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
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
  swiper: {
    height: height,
    backgroundColor: 'transparent',
    backgroundColor: '#000'
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
    flexShrink: 1,
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


// export default StackNavigator({
//   Home: { screen: Index },
// });
// 