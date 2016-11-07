import { combineReducers } from 'redux';
import { shoppingList } from './shopping_list';
import { listItem } from './list_item';

const shoppingListApp = combineReducers({
  shoppingList,
  listItem
})

export default shoppingListApp;
