import React from 'react';

const CartDetail = ({currentProduct, addToCar}) => {
    if (!currentProduct) return <div><h2>选择图书</h2></div>
    return (
        <div>
            <h2>图书详情</h2>
            <h3>{currentProduct.title}</h3>
            <p>{currentProduct.auther}</p>
            <p>{currentProduct.price}</p>
            <p>{currentProduct.id}</p>
            <button onClick={() => addToCar(currentProduct)}>
                放进购物车
            </button>
        </div>
    );
};

export default CartDetail;