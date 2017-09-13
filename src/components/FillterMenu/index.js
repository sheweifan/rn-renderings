import React from 'react';
import { StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  Animated,
  ScrollView,
  Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {height, width} = Dimensions.get('window');


class FillterMenu extends React.Component{
  constructor(props){
    super(props);
    this.menuAnimate= new Animated.Value(0);
    this.state = {
      hidden: props.hidden
    }
  }
  render(){
    const { hidden } = this.state;
    // console.log(9999999,typeof )
    // if(hidden){
    //   return null
    // }

    const { style,data } = this.props;
    return (
      <View style={[
          styles.fillterMenu,
          style,
          {
            left: hidden? 9999: 0
          }
        ]}
      >
        <Animated.View 
          style={[
            styles.fillterMenuInner,
            {
                transform: [
                  {
                    translateY: this.menuAnimate.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-menuScrollHeight, 0 ]
                    }),
                  }
                ]
              }
          ]}
        >
          <ScrollView 
            iosalwaysBounceVertical={false}
            contentContainerStyle={styles.fillterMenuList}
          >
            {
              data.map(
                (item,i)=>{
                  return (
                    <View style={styles.fillterMenuItem} key={i}>
                      <TouchableOpacity style={[
                          styles.fillterMenuItemInner,
                          (i===1?styles.fillterMenuItemInnerActive:{})
                        ]}
                      >
                        <Text style={[
                            styles.fillterMenuItemText,
                            (i===1?styles.fillterMenuItemTextActive:{})
                          ]}
                        >
                          {item}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )
                }
              )
            }
          </ScrollView>
        </Animated.View>
      </View>
    )
  }
  componentDidMount(){
    // Animated.timing(
    //   this.menuAnimate,{
    //     toValue: 1,
    //     duration: 500,
    //     // easing: Easing.linear
    //   }
    // ).start()
   
  }
  componentWillReceiveProps(nextProps){
    const {hidden} = nextProps;
    // if(!hidden){
        this.setState({
          hidden
        },()=>{
          Animated.timing(
            this.menuAnimate,{
              toValue: hidden?0:1,
              duration: 500,
              // easing: Easing.linear
            }
          ).start(()=>{
            // if(hidden){
            //   this.setState({
            //     hidden
            //   })
            // }
          })   
        })
    // }
    // Animated.timing(
    //   this.menuAnimate,{
    //     toValue: hidden?0:1,
    //     duration: 500,
    //     // easing: Easing.linear
    //   }
    // ).start(()=>{
    //   // if(hidden){
    //   //   this.setState({
    //   //     hidden
    //   //   })
    //   // }
    // })
  }
}
const padding = 12;
const menuScrollHeight = parseInt( height/2 );
const styles = StyleSheet.create({
  fillterMenu: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 45,
    bottom: 0,
    overflow: 'hidden',
    backgroundColor:'rgba(0,0,0,0.3)',
  },
  fillterMenuInner:{
    maxHeight: menuScrollHeight,
    backgroundColor:'#fff',
  },
  fillterMenuList:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: padding/2,
    paddingVertical: padding
  },
  fillterMenuItem: {
    width: (width-padding/2*2)/3,
    padding: padding/2,
  },
  fillterMenuItemInner:{
    height: 45,
    borderRadius: 45/2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e8e8e8'
  },
  fillterMenuItemInnerActive:{
    borderWidth: 0,
    backgroundColor: '#000'
  },
  fillterMenuItemText: {
    fontSize: 13,
    color: '#666666'
  },
  fillterMenuItemTextActive: {
    color: '#fff'
  }
})

export default FillterMenu;
