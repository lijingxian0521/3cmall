import React, { Component } from 'react';

import CartList from '../cartList/cartList.js';
import CartDetail from '../cartDetail/cartDetail';
import CartTotal from '../cartTotal/cartTotal';
import {ajax} from '../../../utils.js';
class CartProducts extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            currentProduct: null,
            totalNum: 0,
            total: 0,
            checkAll: false,
        };
    }
    componentWillMount(){
        ajax({
            url:'http://localhost:3000/cart',
            method:'get'
        }).then((res)=>{
            this.setState({products:[...res]});
        })
    }
    handleListClick=(product)=> {
        this.setState({
            currentProduct: product
        });
    };

    handleAddToCar=(currentCar)=> {
        let totalNum = this.state.totalNum;
        let car = currentCar;
        let total = this.state.total;

        let exist = false;

        if (car.length) {
            car.forEach(product => {
                // if (product.id === currentProduct.id) {
                    product.number += 1;
                    totalNum += 1;
                    exist = true;
                    this.setState({
                        totalNum
                    });
                // }
            });
        }

        if (!exist) {
            console.log(car);
            car = car.concat(Object.assign({}, {number:1}));
            totalNum += 1;
            this.setState({
                car,
                totalNum
            });
        }

        // total = car.map(product => (product.price * product.number)).reduce((prev, cur) => prev + cur);
        total= car.reduce((prev,cur)=>{return prev+cur.price*cur.number},0);
        this.setState({
            total
        });
    };
    handleDelFromCar = (currentCar)=>{
        let totalNum = this.state.totalNum;
        let car = currentCar;
        let total = this.state.total;

        let exist = false;

        if (car.length) {
            car.forEach(product => {
                product.number += 1;
                totalNum += 1;
                exist = true;
                this.setState({
                    totalNum
                });
            });
        }

        if (!exist) {
            car = car.concat(Object.assign({}, {number:1}));
            totalNum += 1;
            this.setState({
                car,
                totalNum
            });
        }
        total= car.reduce((prev,cur)=>{
            console.log(cur,cur.price,cur.number);return prev+cur.price*cur.number},0);
        console.log(total);
        this.setState({
            total
        });
    };
    render() {
        return (
            <div>
                <ul className='cart-list'>
                    {
                        this.state.products.map((pro,ind)=>(
                            <CartList
                                key={pro.id}
                                pro={pro}
                                products={this.state.products}
                                checkAll={this.handleCheckAll}
                                listClick={this.handleListClick}
                                addToCar={this.handleAddToCar}
                                delFromCar={this.handleDelFromCar}
                            />
                        ))
                    }
                </ul>

                {/*<CartDetail currentProduct={this.state.currentProduct} addToCar={this.handleAddToCar}/>*/}
                <CartTotal {...this.state}/>
            </div>
        );
    }
}
export default CartProducts;