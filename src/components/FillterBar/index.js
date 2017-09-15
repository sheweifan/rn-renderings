import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// const FillterBar = ({items,active,fillterChange})=> {
  
// }

class FillterBar extends React.Component{
  constructor(props){
    super(props);

    this.fillterAnimate=props.items.map(()=> new Animated.Value(0))

    // console.log(  )
  }
  render(){
    const { fillterAnimate, props } = this;
    const { items,active } = props;
    return (<View style={[styles.fillterBar]}>
      {
        items.map(
          ({id,text},i)=>(
            <TouchableOpacity 
              activeOpacity={1}
              style={[styles.fillterBarItem]} 
              key={i} 
              onPress={this.fillterChange.bind(this,i)}
            >
              <Text style={styles.fillterBarItemText}>{text}</Text>
              <Animated.View 
                style={[
                  styles.fillterBarItemIcon,
                  {
                    transform: [
                      {
                        rotate: fillterAnimate[i].interpolate({
                          inputRange: [0, 1],
                          outputRange: ['180deg','0deg' ],
                        }),
                      } 
                    ]
                  }
                ]}
              >
                <Icon name="ios-arrow-down" size={16} color='#a1a1a1' />
              </Animated.View>
              {
                i === items.length-1
                ? null
                : <View style={styles.fillterBarItemLine}></View>
              }
            </TouchableOpacity>
          )
        )
      }
    </View>)
  }
  fillterChange(idx){
    const { items,active,onChange } = this.props;
    const _idx = (idx === active? null:idx);
    onChange(_idx)
  }
  componentWillReceiveProps(nextProps){

    const { fillterAnimate, props } = this;
    const { active } = nextProps;
    for(let i in fillterAnimate){
      Animated.timing(
        fillterAnimate[i],{
          toValue: ( parseInt(i) === active ? 1 : 0),
          duration: 500,
          // easing: Easing.linear
        }
      ).start()
    }


  }
}
const padding = 12;
const styles = StyleSheet.create({
  fillterBar: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: '#ececec',
    borderBottomWidth: 1,
    height: 45,
    position: 'relative',
    backgroundColor: '#fff'
  },
  fillterBarItem: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fillterBarItemText: {
    fontSize: 13,
    color: '#000',
  },
  fillterBarItemIcon: {
    marginLeft: 7,
    // marginTop: 4,
    // marginBottom: 4
  },
  fillterBarItemLine: {
    width: 1,
    height: 20,
    backgroundColor: '#ececec',
    position: 'absolute',
    right: 0,
    top: (45-20)/2
    // alignSelf: 'flex-end'
  }
})

export default FillterBar;
