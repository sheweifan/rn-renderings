import * as types from '../../constants'
const {
  SEARCH_SELECT_CHANGE,
  SEARCH_KEY_CHANGE,
  SEARCH_HISTORY_CHANGE,
  SEARCH_HISTORY_CLEAN
} = types;

const initState = {
  searchKey: '',
  searchSelected: 0,
  searchHistory: []
}

export default search = (state=initState, action) => {
  switch(action.type){
    case SEARCH_SELECT_CHANGE:
      return Object.ssign({},state,{ searchSelected: action.selected })
    case SEARCH_KEY_CHANGE:
      return Object.ssign({},state,{ searchKey: action.text })
    case SEARCH_HISTORY_CHANGE:
      return Object.ssign({},state,{ searchHistory: state.searchHistory.cancat([item])} )
    case SEARCH_HISTORY_CLEAN:
      return Object.ssign({},state,{ searchHistory: []} )
    default: 
      return state
  }

}