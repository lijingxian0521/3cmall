import React, {Component} from 'react';
import '../style/common.less'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { ConnectedRouter} from 'react-router-redux'
import createHashHistory from 'history/createHashHistory'
import Ads from "./Ads/index";
import Home from "./Home/index";
import List from "./List/index";
import Discovery from "./Discovery/index";
import Cart from "./Cart/index";
import Profile from "./Profile/index";
import Detail from "./Detail/detail";
import Tab from "../components/Tab/index";

const history = createHashHistory();

export default class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Ads}/>
            <Route path="/home" component={Home}/>
            <Route path="/list" component={List}/>
            <Route path="/discovery" component={Discovery}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/detail" component={Detail}/>

          </Switch>
          <Tab/>
        </div>
      </ConnectedRouter>
    )
  }
}