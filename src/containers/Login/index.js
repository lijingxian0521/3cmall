import React,{Component} from 'react';
import Header from '../../components/Header/index'
import avatar from '../../../resource/images/profile.png'
import './index.less'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../store/actions/session';
@connect(
    state => state.session,
    actions
)

export default class Login extends Component{
    handleClick = () => {
        let mobile = this.refs.mobile.value;
        let password = this.refs.password.value;
        this.props.login({mobile, password});
    }
    render(){

        return (
            <ul className="login">
                <Header title="登 陆" />
                <li className="avatar">
                    <img src={avatar} />
                </li>
                <li><input ref="mobile" type="text" placeholder="手机号"/></li>
                <li><input ref="password" type="text" placeholder="密码"/></li>
                <li><Link to="/register">前往注册</Link></li>
                <li><button onClick={this.handleClick}>登 陆</button></li>

            </ul>
        )
    }
}
