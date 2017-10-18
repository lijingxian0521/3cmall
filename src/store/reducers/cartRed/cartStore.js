import * as types from '../../action-types.js';
let initState = {};
let cartPro = (state=initState,action)=>{
    switch (action.type){
        case types.CART_PRODUCT:
            return {action}
    }
    return state;
};
export default cartPro;