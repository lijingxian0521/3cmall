/*
import React,{Component} from 'react';
import './index.less';
import img from '../001.jpg';
export default class CartList extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <ul className="cart-list">
                {
                    this.props.products.map((pro,ind)=>(
                        <li key={ind} className="list-li">
                            <div className="pro-kind">
                                <input className="checkbox" type="checkbox"/>
                                <span className="kind">{pro.brand}</span>
                            </div>
                            <div className="pro-show">
                                <input className="checkbox" type="checkbox"/>
                                <img src={pro.cover} alt=""/>
                                <div className="pro-describe">
                                    <p className="pro-title">{pro.description}</p>
                                    <p className="pro-deal">
                                        <span>{`￥${pro.price}`}</span>
                                        <span>
                                    <button className="btn" type="button">-</button>
                                    <input className="cnt" type="text" placeholder="1"/>
                                    <button className="btn" type="button">+</button>
                                </span>
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))
                }
                <li className="pro-total">
                    <div>
                        <input className="checkbox" type="checkbox"/>
                        <span>全选</span>
                        <span>合计：￥{this.props.total}</span>
                    </div>
                    <button className="btn">去结算 <span>({this.props.total})</span></button>
                </li>
            </ul>
        )
    }
}*/
