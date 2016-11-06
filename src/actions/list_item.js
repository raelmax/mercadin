export const ADD_ITEM_TO_LIST = 'ADD_ITEM_TO_LIST';
export const SET_ITEM_ATTRIBUTES = 'SET_ITEM_ATTRIBUTES';
export const REMOVE_ITEM_FROM_LIST = 'REMOVE_ITEM_FROM_LIST';

export function addItemToList(id) {
  return {
    type: ADD_ITEM_TO_LIST,
    id
  }
}

export function setItemAttributes(id, attributes) {
  return {
    type: SET_ITEM_ATTRIBUTES,
    id,
    attributes
  }
}

export function removeItemFromList(id) {
  return {
    type: REMOVE_ITEM_FROM_LIST,
    id
  }
}
