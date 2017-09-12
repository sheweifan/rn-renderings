import instance from './instance';
import { convertRESTAPI } from '../util';

/** 根据定位获取城市信息 **/
function GetCityMes_get(opts) {
  return instance({
    method: 'get',
    url:  'https://weixin.jirengu.com/weather/cityid?location='+opts.location,
    // opts: opts
  });
}

export {
  GetCityMes_get
};
