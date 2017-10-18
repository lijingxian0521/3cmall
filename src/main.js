import React from 'react';
import ReactDOM from 'react-dom';
import App from "./containers/App";
import {Provider} from 'react-redux';
import store from './store';
import {setRem} from './utils';

setRem(document,window); //动态计算Rem 1rem = 100px

ReactDOM.render(<Provider store={store}>
  <App/>
</Provider>, document.querySelector('#root'));