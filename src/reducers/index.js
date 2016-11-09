import { combineReducers } from 'redux';
import { shoppingList } from './ShoppingList';
import { listItem } from './ListItem';

const shoppingListApp = combineReducers({
  shoppingList,
  listItem
})

export default shoppingListApp;
