export const ADD_SHOPPING_LIST =  'ADD_SHOPPING_LIST';
export const EDIT_SHOPPING_LIST = 'EDIT_SHOPPING_LIST';
export const REMOVE_SHOPPING_LIST = 'REMOVE_SHOPPING_LIST';

export function addShoppingList(id, text) {
  return {
    type: ADD_SHOPPING_LIST,
    id: id,
    text,
    items: []
  }
}

export function editShoppingList(id, text) {
  return {
    type: EDIT_SHOPPING_LIST,
    id,
    text
  }
}

export function removeShoppingList(id) {
  return {
    type: REMOVE_SHOPPING_LIST,
    id
  }
}
