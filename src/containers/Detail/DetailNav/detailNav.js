import React,{Component} from 'react';
import './detailNav.less'
export default class DetailNav extends Component{
    render(){
        return (
            <ul className="cart-add">
                <li className="shop"><i className="iconfont icon-dianpu"></i>店铺</li>
                <li><i className="iconfont icon-shoppingcar-ac"></i>加入购物车</li>
                <li className="cart-bg"><i className="iconfont icon-zhifu4"></i>立即购买</li>
            </ul>
        )
    }
}