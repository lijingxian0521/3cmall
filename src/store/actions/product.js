
import * as types from '../action-types.js';
export let setProduct = (myProduct) =>{
    return {
        type:types.FETCH_PRODUCT,
        myProduct
    }
};
export default {
    setProduct
}