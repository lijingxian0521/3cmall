import * as types from '../action-types.js';
let initState={
    product:{
        computers:[],
        phones:[],
        other:[]
    }
};
export default function (state = initState, action)  { // 状态 和 动作
    switch (action.type) {
        // 获取轮播图
        case types.FETCH_PRODUCT:
            return {
                ...state,
                product:{
                    ...state.product,
                    product:action.product
                }
            };
        default:
            return state;

    }
}