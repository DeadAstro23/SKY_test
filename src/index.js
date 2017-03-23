import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import App from './components/app';
import * as reducers from './reducers';

import '../style/less/style.less';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const reducer = combineReducers(reducers);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
