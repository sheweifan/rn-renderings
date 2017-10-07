import * as types from '../../constants';
const {
  LOCATION_CHANGE,
} = types;


const initState = {
	cityId: null,
	cityName: null,
	cityPath: null
};

export default location = (state=initState, action) => {
  switch(action.type){
    case LOCATION_CHANGE:
      return action.data
    default: 
      return state
  }
}