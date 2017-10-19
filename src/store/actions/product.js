import {ajax} from '../../utils'
let Host= 'http://localhost:3000';
import * as types from '../action-types.js';
export default {
    getProduct(url){
        return (dispatch,getState)=>{
            ajax({
                url:`${Host}${url}`,
                method:'get'
            }).then(myProduct=>{
                dispatch({
                    type:types.FETCH_PRODUCT,
                    myProduct,

                })
            })
        }

    },
}