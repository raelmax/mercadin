export const ADD_SHOPPING_LIST =  'ADD_SHOPPING_LIST';
export const EDIT_SHOPPING_LIST = 'EDIT_SHOPPING_LIST';
export const REMOVE_SHOPPING_LIST = 'REMOVE_SHOPPING_LIST';

let nextShoppingId = 0
export function addShoppingList(name) {
  return {
    type: ADD_SHOPPING_LIST,
    id: nextShoppingId++,
    name
  }
}

export function editShoppingList(id, name) {
  return {
    type: EDIT_SHOPPING_LIST,
    id,
    name
  }
}

export function removeShoppingList(id) {
  return {
    type: REMOVE_SHOPPING_LIST,
    id
  }
}
