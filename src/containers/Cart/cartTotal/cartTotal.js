import React from 'react';
import './cartTotal.less';
const CartTotal = ({car, totalNum, total}) => {
    // let result = car.length ? <span>{totalNum} 总价为{total}</span>: <p>购物车为空</p>;
    return (
        <div className="pro-total">
            <div>
                <input className="checkbox" type="checkbox"/>
                <span>全选</span>
                <span>合计：￥{total}</span>
            </div>
            <button className="btn">去结算 <span>({totalNum})</span></button>
        </div>
    );
};

export default CartTotal;