import * as types from '../../constants';

import Storage from '../../utils/storage';

export const searchSelectChange = (selected) => {
  return {
    type: types.SEARCH_SELECT_CHANGE,
    selected
  }
}

export const searchKeyChange = (text) => {
  return (dispatch,getState)=>{
    dispatch({
      type: types.SEARCH_KEY_CHANGE,
      text
    });
  }
}

export const searchHistoryAdd = (item) => {
  return async (dispatch,getState)=>{
    const his = getState().search.searchHistory;
    const newHis = [item,...his]; 
    await Storage.update(types.SEARCH_HISTORY_CACHE,newHis);
    dispatch({
      type: types.SEARCH_HISTORY_UPDATE,
      data: newHis
    })
  }
}

export const searchHistoryClean = () => {
  return (dispatch)=>{
    Storage.delete(types.SEARCH_HISTORY_CACHE)
      .then(()=>{
        dispatch({
          type: types.SEARCH_HISTORY_UPDATE,
          data: []
        })  
      })
  }
}

export const searchHistoryInit = (data) => {
  return (dispatch)=>{
    Storage.get(types.SEARCH_HISTORY_CACHE)
      .then((data)=>{
        dispatch({
          type: types.SEARCH_HISTORY_UPDATE,
          data: (data==null ? []: data)
        })  
      })
  }
}

export const searchHistoryVisableChange = (visable) => {
  return {
    type: types.SEARCH_HISTORY_VISABLE_CHANGE,
    visable
  }
}

