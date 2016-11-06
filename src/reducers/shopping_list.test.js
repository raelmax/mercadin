import * as actions from '../actions/shopping_list';
import { shoppingList } from './shopping_list';

it('When ADD_SHOPPING_LIST', () => {
  const action = actions.addShoppingList('My Shopping List');
  const stateBefore = [];
  const stateAfter = [{
    id: 0,
    name: 'My Shopping List'
  }];

  expect(
    shoppingList(stateBefore, action)
  ).toEqual(stateAfter);
});

it('When EDIT_SHOPPING_LIST', () => {
  const action = actions.editShoppingList(0, 'Updated Shopping List');
  const stateBefore = [
    {id: 0, name: 'My Shopping List'},
    {id: 1, name: 'Other Shopping List'}
  ];
  const stateAfter = [
    {id: 0, name: 'Updated Shopping List'},
    {id: 1, name: 'Other Shopping List'}
  ];

  expect(
    shoppingList(stateBefore, action)
  ).toEqual(stateAfter);
});

it('When REMOVE_SHOPPING_LIST', () => {
  const action = actions.removeShoppingList(1);
  const stateBefore = [
    {id: 0, name: 'My Shopping List'},
    {id: 1, name: 'Other Shopping List'}
  ];
  const stateAfter = [
    {id: 0, name: 'My Shopping List'}
  ];

  expect(
    shoppingList(stateBefore, action)
  ).toEqual(stateAfter);
});
