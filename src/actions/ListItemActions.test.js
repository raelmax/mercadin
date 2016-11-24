import * as actions from './ListItemACtions';

describe('list items actions', () => {

  it('addItemToList', () => {
    expect(
      actions.addItemToList(1, 0, "Rice")
    ).toEqual({type: actions.ADD_ITEM_TO_LIST, id: 0, text: "Rice", listId: 1});
  });

  it('toggleBuyDialog', () => {
    expect(
      actions.toggleBuyDialog()
    ).toEqual({type: actions.TOGGLE_BUY_DIALOG});
  });

  it('openItemBuyDialog', () => {
    expect(
      actions.openItemBuyDialog(0, 1)
    ).toEqual({type: actions.OPEN_ITEM_BUY_DIALOG, listId: 0, id: 1})
  });

  it('setItemAttributes', () => {
    const text = "updated text";
    const quantity = 1;
    const price = 1.0;

    expect(
      actions.setItemAttributes(0, 0, text, quantity, price)
    ).toEqual(
      {type: actions.SET_ITEM_ATTRIBUTES, listId: 0, id: 0, text: text, quantity: quantity, price: price}
    );
  });

  it('removeItemFromList', () => {
    expect(
      actions.removeItemFromList(0, 0)
    ).toEqual({type: actions.REMOVE_ITEM_FROM_LIST, id: 0, listId: 0});
  });

});
