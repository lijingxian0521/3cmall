import * as types from '../action-types.js';
import {ajax} from '../../utils.js';
export let getCartPro = ()=>(dispatch,getState)=>{
    dispatch({type:types.CART_PRODUCT})
};