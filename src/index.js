import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import App from './components/app.jsx';
import Checkout from './components/Checkout.jsx'
import * as reducers from './reducers';

import '../style/less/style.less';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const reducer = combineReducers(reducers);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
      <Router>
          <div>
            <Route exact path="/" component={App}/>
            <Route path="/checkout" component={Checkout}/>
          </div>
      </Router>
  </Provider>
  , document.querySelector('.container'));
