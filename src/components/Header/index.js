import React, {Component} from 'react';
import './header.less';
import {withRouter} from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <header className="header">
                <i onClick={() => this.props.history.goBack()} className={this.props.icon}>

                </i>
                <span>{this.props.title}</span>
            </header>
        )
    }
}
export default withRouter(Header)