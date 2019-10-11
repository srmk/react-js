import { connectRouter } from 'connected-react-router'

import { combineReducers } from 'redux';
import eshopReducer from './reducer';

const rootReducer = (history) => combineReducers({
    eShop: eshopReducer,
    router: connectRouter(history),
});

export default rootReducer;