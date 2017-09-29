 import { AsyncStorage } from 'react-native';

class Storage {

  static async get(key){
    const val = await AsyncStorage.getItem(key)
    return JSON.parse(val)
  }

  static save(key,value){
    return AsyncStorage.setItem(key,JSON.stringify(value));
  }

  static delete(key){
    return AsyncStorage.removeItem(key);
  }

  static async update(key,value){
    const hisValue = await Storage.get(key);
    const isJson = (typeof value === 'object' && !Array.isArray(value));
    const newValue = isJson ? object.assign({},hisValue,value) : value;
    return Storage.save(key,newValue);
  }

}


    // AsyncStorage.getItem(key)
    //   .then(value=>{
    //     return Promise.resolve(JSON.parse(value))
    //   })
export default Storage;