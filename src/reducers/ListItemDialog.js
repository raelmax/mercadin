import * as actions from '../actions/ListItemActions';

const initialState = {openDialog: false, listId: null, id: null};
export const listItemDialog = (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_BUY_DIALOG:
      return Object.assign({}, state, {
        openDialog: !state.openDialog
      })
    case actions.OPEN_ITEM_BUY_DIALOG:
      return {
        openDialog: true,
        listId: action.listId,
        id: action.id
      }
    default:
      return state;
  }
}
