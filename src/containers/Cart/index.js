import React, {Component} from 'react';
import Header from '../../components/Header/index.js';
import CartList from "./cartList/index";
import './index.less';
import CartProducts from './cartShow/proInCart.js';
export default class Cart extends Component{
    render(){
        return(
            <div>
                <Header className="hd" icon="iconfont icon-goback" title="购物车"/>
                {/*<CartList products={this.state.products} total={this.state.total}/>*/}
                <CartProducts/>
            </div>
        )
    }
}