import * as types from '../action-types.js';

export let myProduct = (state = {}, action) => { // 状态 和 动作
    switch (action.type) {
        // 获取轮播图
        case types.FETCH_PRODUCT:
            return {...state, ...action.product};
        default:
            return state;

    }
};