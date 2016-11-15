export const ADD_ITEM_TO_LIST = 'ADD_ITEM_TO_LIST';
export const TOGGLE_BUY_DIALOG = 'TOGGLE_BUY_DIALOG';
export const OPEN_ITEM_BUY_DIALOG = 'OPEN_ITEM_BUY_DIALOG';
export const SET_ITEM_ATTRIBUTES = 'SET_ITEM_ATTRIBUTES';
export const REMOVE_ITEM_FROM_LIST = 'REMOVE_ITEM_FROM_LIST';

let nextListItemId = 0
export function addItemToList(listId, text) {
  return {
    type: ADD_ITEM_TO_LIST,
    id: nextListItemId++,
    listId,
    text
  }
}

export function toggleBuyDialog() {
  return {
    type: TOGGLE_BUY_DIALOG
  }
}

export function openItemBuyDialog(listId, id) {
  return {
    type: OPEN_ITEM_BUY_DIALOG,
    listId,
    id
  }
}

export function setItemAttributes(listId, id, quantity, price) {
  return {
    type: SET_ITEM_ATTRIBUTES,
    listId,
    id,
    quantity,
    price
  }
}

export function removeItemFromList(listId, id) {
  return {
    type: REMOVE_ITEM_FROM_LIST,
    listId,
    id
  }
}
