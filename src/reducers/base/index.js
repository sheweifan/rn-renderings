import * as types from '../../constants';
const {
  LOCATION_CHANGE,
} = types;


const initState = {
  location: null
};

export default location = (state=initState, action) => {
  switch(action.type){
    case LOCATION_CHANGE:
      return Object.assign({},state,{
        location: action.data
      })
    default: 
      return state
  }
}