import * as actions from './list_item';

describe('list items actions', () => {

  it('addItemToList', () => {
    expect(
      actions.addItemToList(1)
    ).toEqual({type: actions.ADD_ITEM_TO_LIST, id: 1});
  });

  it('setItemAttributes', () => {
    const attributes = {price: 1.0, quantity: 1};
    expect(
      actions.setItemAttributes(1, attributes)
    ).toEqual(
      {type: actions.SET_ITEM_ATTRIBUTES, id: 1, attributes: attributes}
    );
  });

  it('removeItemFromList', () => {
    expect(
      actions.removeItemFromList(1)
    ).toEqual({type: actions.REMOVE_ITEM_FROM_LIST, id: 1});
  });

});
