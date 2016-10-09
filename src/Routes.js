import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import Mercadin from './App';
import ShoppingList from './ShoppingList';
import ProductList from './ProductList';

export default function Routes(props) {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={Mercadin}>
              <IndexRoute component={ShoppingList} />
              <Route path="/:shoppingId" component={ProductList} />
            </Route>
        </Router>
    )
};
