import React, {Component} from 'react';
import './index.less'
export default class Category extends Component{
    render(){
        return(
            <div className="category">
                <p>
                    <i className="iconfont icon-fengexian icon"></i>
                    <span>{this.props.title}</span>
                </p>
                <ul >
                    {
                        this.props.list.map((item,index)=>(
                            index<6&&<li key={index}>
                                <img src={item.cover} alt=""/>
                                <p>{item.description}</p>
                                <span>￥{item.price.toFixed(2)}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}