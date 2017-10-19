import React,{Component} from 'react';
import './index.less'
import avatar from '../../../resource/images/profile.png'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
@connect(
    state=>state.session
)
export default class Profile extends Component{
    render(){
        return (
            <div className="profile">
                <img src={avatar}/>
                {
                    this.props.user?<span>
                  {this.props.user.mobile}
                </span>:<span>
                  <Link to="/login">登录</Link>
                </span>
                }
                <ul className="login-list">
                    <li>
                        <i className="iconfont icon-wenti"></i>
                        <p>常见问题</p>
                        <i className="iconfont icon-jiantou"></i>
                    </li>
                    <li>
                        <i className="iconfont icon-women"></i>
                        <p>关于我们</p>
                        <i className="iconfont icon-jiantou"></i>
                    </li>
                    <li>
                        <i className="iconfont icon-mima"></i>
                        <p>修改密码</p>
                        <i className="iconfont icon-jiantou"></i>
                    </li>
                </ul>
            </div>
        )
    }
}