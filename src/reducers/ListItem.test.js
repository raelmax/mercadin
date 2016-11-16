import * as actions from '../actions/ListItemActions';
import { listItem } from './ListItem';


it('When ADD_ITEM_TO_LIST', () => {
  const action = actions.addItemToList(0, 'Rice');
  const stateBefore = [
    {id: 0, text: 'Shopping List', items: []}
  ];
  const stateAfter = [{
    id: 0,
    text: 'Shopping List',
    items: [{id: 0, text: 'Rice', price: 0, quantity: 0}]
  }];

  expect(
    listItem(stateBefore, action)
  ).toEqual(stateAfter);
});

it('When SET_ITEM_ATTRIBUTES', () => {
  const price = 0.5;
  const quantity = 1;
  const action = actions.setItemAttributes(0, 0, quantity, price);
  const stateBefore = [{
    id: 0,
    text: 'Shopping List',
    items: [{id: 0, text: 'Rice', price: 0, quantity: 0}]
  }];
  const stateAfter = [{
    id: 0,
    text: 'Shopping List',
    items: [{id: 0, text: 'Rice', price: price, quantity: quantity}]
  }];

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