import React,{Component} from 'react';
import Header from '../../components/Header/index'
import avatar from '../../../resource/images/profile.png'
import './index.less'
import {Link} from 'react-router-dom';
import {getCode} from '../../utils'
import {connect} from 'react-redux'
import actions from '../../store/actions/session'
@connect(//@装饰器  和原来写法一样
    state => state.session,
    actions,
)
export default class Register extends Component{
    constructor(){
        super();
        this.state={
            val:'',
            btnVal:''
        }
    }
    componentWillMount(){
        this.handleClick();
    }
    handleClick=()=>{
        let val=getCode();
        this.setState({val})
    };
    handleRegister=()=>{
        let mobile = this.refs.mobile.value;
        let password = this.refs.password.value;
        let curVal=this.state.val;
        let btnVal=this.state.btnVal;
        if(btnVal==curVal){
            let info = {mobile,password}
            this.props.register(info)
        }else{
            alert('验证码错误');
            this.handleClick();
        }

    };
    handleChange=(e)=>{
        let btnVal=e.target.value;
        this.setState({btnVal})
    }
    render(){

        return (
            <ul className="register">
                <Header title="注 册" />
                <li className="avatar">
                    <img src={avatar} />
                </li>
                <li><input ref="mobile" type="text" placeholder="手机号"/></li>
                <li><input ref="password" type="text" placeholder="密码"/></li>
                <li className="verify">

                    <input value={this.state.btnVal} onChange={this.handleChange} className="input-short" type="text" name="sms_salt" placeholder="请输验证码" />
                    <div>
                        <input  id="btn" type="text" value={this.state.val} onChange={this.handleClick}/>
                        <span onClick={this.handleClick}>看不清？换一个</span>
                    </div>
                </li>
                <li><Link to="/login">前往登陆</Link></li>
                <li><button onClick={this.handleRegister}>注 册</button></li>

            </ul>
        )
    }
}

