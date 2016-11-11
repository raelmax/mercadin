import * as actions from '../actions/ShoppingListActions';

export const shoppingList = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_SHOPPING_LIST:
      return [...state, {id: action.id, text: action.text, items: action.items}];
    case actions.EDIT_SHOPPING_LIST:
      return state.map(shoppingList => {
        if (shoppingList.id !== action.id) {
          return shoppingList;
        }

        return {
          ...shoppingList,
          text: action.text
        }
      });
    case actions.REMOVE_SHOPPING_LIST:
      return state.filter(shoppingList => shoppingList.id !== action.id);
    default:
      return state;
  }
}
