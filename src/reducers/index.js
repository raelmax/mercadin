import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import { shoppingList } from './ShoppingList';
import { listItem } from './ListItem';

const shoppingListApp = combineReducers({
  shoppingList,
  listItem,
  routing: routerReducer
})

export default shoppingListApp;
