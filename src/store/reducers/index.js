import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import list from './list'
import session from './session'
import product from './product'
import cartStore from './cartRed/cartStore.js';
export default combineReducers({
    list,
    product,
    cartStore:cartStore,
    session,
    router:routerReducer,
})