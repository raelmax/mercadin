import * as actions from '../actions/ShoppingListActions';
import { shoppingList } from './ShoppingList';

it('When ADD_SHOPPING_LIST', () => {
  const action = actions.addShoppingList(0, 'My Shopping List');
  const stateBefore = [];
  const stateAfter = [{
    id: 0,
    text: 'My Shopping List',
    items: []
  }];

  expect(
    shoppingList(stateBefore, action)
  ).toEqual(stateAfter);
});

it('When EDIT_SHOPPING_LIST', () => {
  const action = actions.editShoppingList(0, 'Updated Shopping List');
  const stateBefore = [
    {id: 0, text: 'My Shopping List', items: []},
    {id: 1, text: 'Other Shopping List', items: []}
  ];
  const stateAfter = [
    {id: 0, text: 'Updated Shopping List', items: []},
    {id: 1, text: 'Other Shopping List', items: []}
  ];

  expect(
    shoppingList(stateBefore, action)
  ).toEqual(stateAfter);
});

it('When REMOVE_SHOPPING_LIST', () => {
  const action = actions.removeShoppingList(1);
  const stateBefore = [
    {id: 0, text: 'My Shopping List', items: []},
    {id: 1, text: 'Other Shopping List', items: []}
  ];
  const stateAfter = [
    {id: 0, text: 'My Shopping List', items: []}
  ];

  expect(
    shoppingList(stateBefore, action)
  ).toEqual(stateAfter);
});
