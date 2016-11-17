import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import './app.css';

import ShoppingList from './components/ShoppingList';
import ShoppingListDetail from './components/ShoppingListDetail';
import shoppingListApp from './reducers/Index';

const middleware = routerMiddleware(hashHistory)
let store = createStore(shoppingListApp, applyMiddleware(middleware));

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={ShoppingList} />
      <Route path="/l/:listId" component={ShoppingListDetail} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
