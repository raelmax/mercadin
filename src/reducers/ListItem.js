import * as actions from '../actions/ListItemActions';

export const listItem = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_ITEM_TO_LIST:
      return state.map(shoppingList => {
        if (shoppingList.id !== action.listId) {
          return shoppingList;
        }

        return {
          ...shoppingList,
          items: [...shoppingList.items, {id: action.id, name: action.name}]
        }
      });
    case actions.SET_ITEM_ATTRIBUTES:
      return state.map(shoppingList => {
        if (shoppingList.id !== action.listId) {
          return shoppingList;
        }

        return {
          ...shoppingList,
          items: shoppingList.items.map(item => {
            if (item.id !== action.id) {
              return item;
            }
            return {...item, ...action.attributes}
          })
        }
      });
    case actions.REMOVE_ITEM_FROM_LIST:
      return state.map(shoppingList => {
        if (shoppingList.id !== action.listId) {
          return shoppingList;
        }

        return {
          ...shoppingList,
          items: shoppingList.items.filter(item => item.id !== action.id)
        }
      });
    default:
      return state;
  }
}
