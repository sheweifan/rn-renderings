import React from 'react';
import { StyleSheet,View, Image, ActivityIndicator } from 'react-native';

const IMGSTATE_LOADING = 'loading'
const IMGSTATE_LOADEND = 'loadend'

class LazyImage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      imgState: IMGSTATE_LOADING
    }
  }
  render(){
    const { imgState } = this.state;
    const { style, source } = this.props;
    // if(imgState === IMGSTATE_LOADING){
      return (
        <View style={[
            style,
            styles.lazyImage
          ]}>
            <ActivityIndicator />
            <Image 
              source={source} 
              style={[
                style,
                styles.lazyImageHidden,
                {
                   opacity: imgState === IMGSTATE_LOADING ? 0: 1
                }
              ]} 
              onLoadEnd={this.onLoad.bind(this)}
            />
        </View>
      );
    // }

    // if(imgState === IMGSTATE_LOADEND){
    //   return <Image source={source} style={style}/>
    // }
  }
  onLoad(){
    this.setState({
      imgState: IMGSTATE_LOADEND
    })
  }
}


const styles = StyleSheet.create({
  lazyImage: {
    // backgroundColor: '#000'
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  lazyImageHidden: {
   
    position: 'absolute',
    left: 0,
    top: 0

  }
});

export default LazyImage