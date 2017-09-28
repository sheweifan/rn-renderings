import { createStore, applyMiddleware } from 'redux';

import getReducers from '../reducers';

export default function getStore(navReducer) {
    return createStore(
        getReducers(navReducer)
    );
}
