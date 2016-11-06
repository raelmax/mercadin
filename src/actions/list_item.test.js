import * as actions from './list_item';

describe('list items actions', () => {

  it('addItemToList', () => {
    expect(
      actions.addItemToList("Rice")
    ).toEqual({type: actions.ADD_ITEM_TO_LIST, id: 0, name: "Rice"});
  });

  it('setItemAttributes', () => {
    const attributes = {price: 1.0, quantity: 1};
    expect(
      actions.setItemAttributes(0, attributes)
    ).toEqual(
      {type: actions.SET_ITEM_ATTRIBUTES, id: 0, attributes: attributes}
    );
  });

  it('removeItemFromList', () => {
    expect(
      actions.removeItemFromList(0)
    ).toEqual({type: actions.REMOVE_ITEM_FROM_LIST, id: 0});
  });

});
