import * as actions from '../actions/ListItemActions';

const initialState = {openDialog: false};
export const listItemDialog = (state = initialState, action) => {
  switch (action.type) {
    case actions.OPEN_BUY_DIALOG:
      return {
        openDialog: !state.openDialog
      }
    default:
      return state;
  }
}
