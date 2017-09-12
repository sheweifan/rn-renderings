
// import {GetCityMes_get} from '../api/api/my';

        // var initialPosition = JSON.stringify(position);
        // console.log(position)
        // "coords": Object {
        //   "accuracy": 3.9000000953674316,
        //   "altitude": 0,
        //   "heading": 0,
        //   "latitude": 23.153561,
        //   "longitude": 113.319436,
        //   "speed": 0,
        // },
        // "mocked": false,
        // "timestamp": 1505200643941,
const getLocation = () =>{
  return new Promise((res,rej)=>{
    navigator.geolocation.getCurrentPosition((position) => {
        res(position);
      },(error) => {
        console.log('getLocation error',error)
        rej(error);
      },{
        enableHighAccuracy: true, 
        timeout: 2000, 
        maximumAge: 1000
      }
    );
  })
};

// const getLocationCity = async () =>{

//     const { latitude,longitude } = await getLocation();

//     const cityMes = await GetCityMes_get({latitude,longitude})

//     console.log(cityMes)

// }

export default getLocation
