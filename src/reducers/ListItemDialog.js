import * as actions from '../actions/ListItemActions';

const initialState = {openDialog: false, listId: null, id: null};
export const listItemDialog = (state = initialState, action) => {
  switch (action.type) {
    case actions.OPEN_BUY_DIALOG:
      return {
        openDialog: !state.openDialog,
        listId: action.listId,
        id: action.id
      }
    default:
      return state;
  }
}
