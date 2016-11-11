import * as actions from './ListItemACtions';

describe('list items actions', () => {

  it('addItemToList', () => {
    expect(
      actions.addItemToList(1, "Rice")
    ).toEqual({type: actions.ADD_ITEM_TO_LIST, id: 0, text: "Rice", listId: 1});
  });

  it('setItemAttributes', () => {
    const attributes = {price: 1.0, quantity: 1};
    expect(
      actions.setItemAttributes(0, 0, attributes)
    ).toEqual(
      {type: actions.SET_ITEM_ATTRIBUTES, listId: 0, id: 0, attributes: attributes}
    );
  });

  it('removeItemFromList', () => {
    expect(
      actions.removeItemFromList(0, 0)
    ).toEqual({type: actions.REMOVE_ITEM_FROM_LIST, id: 0, listId: 0});
  });

});
