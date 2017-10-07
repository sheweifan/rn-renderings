import { combineReducers } from 'redux';
import search from './search';
import base from './base';

export default function getReducers(navReducer) {
    return combineReducers({
        search,
        base,
        nav: navReducer
    });
}