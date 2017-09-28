import { combineReducers } from 'redux';
import search from './search';

export default function getReducers(navReducer) {
    return combineReducers({
        search,
        nav: navReducer
    });
}