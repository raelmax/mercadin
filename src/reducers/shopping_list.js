import * as actions from '../actions/shopping_list';

export const shoppingList = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_SHOPPING_LIST:
      return [...state, {id: action.id, name: action.name}];
    case actions.EDIT_SHOPPING_LIST:
      return state.map(shoppingList => {
        if (shoppingList.id !== action.id) {
          return shoppingList;
        }

        return {
          ...shoppingList,
          name: action.name
        }
      });
    case actions.REMOVE_SHOPPING_LIST:
      return state.filter(shoppingList => shoppingList.id !== action.id);
    default:
      return state;
  }
}
