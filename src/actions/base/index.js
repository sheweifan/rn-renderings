import * as types from '../../constants';

import  getLocation  from '../../utils/location';
import {GetCityMes_get} from '../../api/api/my';

export const locationInit = ()=>{
  return async (dispatch, getState)=>{
    try{
      const {coords} = await getLocation();
      const { latitude,longitude } = coords;
      const opts = {
        location:`${latitude}:${longitude}`
      };
      cityMes = await GetCityMes_get(opts);
      // console.log(cityMes)
      const { id, name, path } = cityMes.results[0];
      dispatch({
        type: types.LOCATION_CHANGE,
        data: {
          cityId: id,
          cityName: name,
          cityPath: path.split(',')
        }
      })
    }catch(e){
      // console.log('location err', e)
      dispatch({
        type: types.LOCATION_CHANGE,
        data: {
          cityId: null,
          cityName: null,
          cityPath: null
        }
      })
    }
    
  }
}