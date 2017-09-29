import * as types from '../../constants';
import Storage from '../../utils/storage';

const {
  SEARCH_SELECT_CHANGE,
  SEARCH_KEY_CHANGE,
  SEARCH_HISTORY_UPDATE
} = types;

const initState = {
  searchKey: '',
  searchSelected: 0,
  searchHistory: []
};


export default search = (state=initState, action) => {
  switch(action.type){
    case SEARCH_SELECT_CHANGE:
      return Object.assign({},state,{ searchSelected: action.selected })
    case SEARCH_KEY_CHANGE:
      return Object.assign({},state,{ searchKey: action.text })
    case SEARCH_HISTORY_UPDATE:
      return Object.assign({},state,{ searchHistory: action.data} )
    default: 
      return state
  }

}