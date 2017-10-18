import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import list from './list'
import product from './product'
import cartStore from './cartRed/cartStore.js';
export default combineReducers({
    list,
    product,
    cartStore:cartStore,
    router:routerReducer,
})