import React, {Component} from 'react';
import './header.less'
export default class Header extends Component{
    render(){
        return(
            <header className="header">
                <i className={this.props.icon}></i>
                <span>{this.props.title}</span>
            </header>
        )
    }
}