import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './footer.less';
export default class Tab extends Component{
    render(){
        return(
            <nav className="footer">
                <NavLink to="/home">
                    <i className="iconfont icon-home"></i>
                    <span>主页</span>
                </NavLink>
                <NavLink to="list">
                    <i className="iconfont icon-list"></i>
                    <span>分类</span>
                </NavLink>
                <NavLink to="discovery">
                    <i className="iconfont icon-diqiu"></i>
                    <span>发现</span>
                </NavLink>
                <NavLink to="cart">
                    <i className="iconfont icon-icon1"></i>
                    <span>购物车</span>
                </NavLink>
                <NavLink to="profile">
                    <i className="iconfont icon-wode"></i>
                    <span>我的</span>
                </NavLink>
            </nav>
        )
    }
}