import * as actions from '../actions/ListItemActions';
import { listItemDialog } from './ListItemDialog';


it('When toggle buy dialog', () => {
  const action = actions.toggleBuyDialog();
  const stateBefore = {
    openDialog: false, listId: null, id: null
  };
  const stateAfter = {
    openDialog: true, listId: null, id: null
  };

  expect(
    listItemDialog(stateBefore, action)
  ).toEqual(stateAfter);
});

it('When open a buy dialog', () => {
  const action = actions.openItemBuyDialog(1, 1);
  const stateBefore = {
    openDialog: false, listId: null, id: null
  };
  const stateAfter = {
    openDialog: true, listId: 1, id: 1
  };

  expect(
    listItemDialog(stateBefore, action)
  ).toEqual(stateAfter);
});
