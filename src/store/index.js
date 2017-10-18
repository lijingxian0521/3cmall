import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; // 中间件
import reducer from './reducers';
import {routerMiddleware} from 'react-router-redux';
import createHashHistory from 'history/createHashHistory';
const history = createHashHistory();
const routeWare = routerMiddleware(history);
let store = createStore(reducer,applyMiddleware(routeWare,thunk));
window._store = store;
export default store;