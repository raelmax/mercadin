export const ADD_ITEM_TO_LIST = 'ADD_ITEM_TO_LIST';
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

export function setItemAttributes(listId, id, attributes) {
  return {
    type: SET_ITEM_ATTRIBUTES,
    listId,
    id,
    attributes
  }
}

export function removeItemFromList(listId, id) {
  return {
    type: REMOVE_ITEM_FROM_LIST,
    listId,
    id
  }
}
