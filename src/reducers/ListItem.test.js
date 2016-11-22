import * as actions from '../actions/ListItemActions';
import { listItem } from './ListItem';


it('When add a new item to list', () => {
  const action = actions.addItemToList(1, 0, 'Rice');
  const stateBefore = [
    {id: 0, text: 'Shopping List 1', items: []},
    {id: 1, text: 'Shopping List 2', items: []}
  ];
  const stateAfter = [
    {id: 0, text: 'Shopping List 1', items: []},
    {id: 1, text: 'Shopping List 2', items: [{id: 0, text: 'Rice', price: 0, quantity: 0}]}
  ];

  expect(
    listItem(stateBefore, action)
  ).toEqual(stateAfter);
});

it('When set attribute to list item', () => {
  const price = 0.5;
  const quantity = 1;
  const action = actions.setItemAttributes(1, 0, quantity, price);
  const stateBefore = [
    {id: 0, text: 'Shopping List 1', items: []},
    {id: 1, text: 'Shopping List 1', items: [{id: 0, text: 'Rice', price: 0, quantity: 0}]}
  ];
  const stateAfter = [
    {id: 0, text: 'Shopping List 1', items: []},
    {id: 1, text: 'Shopping List 1', items: [{id: 0, text: 'Rice', price: price, quantity: quantity}]}
  ];

  expect(
    listItem(stateBefore, action)
  ).toEqual(stateAfter);
});

it('When REMOVE_ITEM_FROM_LIST', () => {
  const action = actions.removeItemFromList(0, 0);
  const stateBefore = [{
    id: 0,
    text: 'Shopping List',
    items: [{id: 0, text: 'Rice'}]
  }];
  const stateAfter = [
    {id: 0, text: 'Shopping List', items: []}
  ];

  expect(
    listItem(stateBefore, action)
  ).toEqual(stateAfter);
});
