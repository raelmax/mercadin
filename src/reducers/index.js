import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import { shoppingList } from './ShoppingList';

const shoppingListApp = combineReducers({
  shoppingList,
  routing: routerReducer
});

export default shoppingListApp;
