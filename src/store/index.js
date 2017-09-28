import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import getReducers from '../reducers';

export default function getStore(navReducer) {
    return createStore(
        getReducers(navReducer),
        undefined,
        applyMiddleware(logger)
    );
}
