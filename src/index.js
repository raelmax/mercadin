import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { Router, Route, browserHistory } from 'react-router';
import ShoppingList from './components/ShoppingList';
import ShoppingListDetail from './components/ShoppingListDetail';
import shoppingListApp from './reducers/Index';

const middleware = routerMiddleware(browserHistory)
let store = createStore(shoppingListApp, applyMiddleware(middleware));

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={ShoppingList} />
      <Route path="/l/:listId" component={ShoppingListDetail} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
