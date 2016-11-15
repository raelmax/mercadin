import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import { shoppingList } from './ShoppingList';
import { listItemDialog } from './ListItemDialog';

const shoppingListApp = combineReducers({
  shoppingList,
  listItemDialog,
  routing: routerReducer
});

export default shoppingListApp;
