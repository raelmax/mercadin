import * as actions from './ShoppingListActions';

describe('shopping list actions', () => {

  it('addShoppingList', () => {
    expect(
      actions.addShoppingList(0, 'My ShoppingList')
    ).toEqual({type: actions.ADD_SHOPPING_LIST, id: 0, text: 'My ShoppingList', items: []});
  });

  it('removeShoppingList', () => {
    expect(
      actions.removeShoppingList(0)
    ).toEqual({type: actions.REMOVE_SHOPPING_LIST, id: 0});
  });

  it('editShoppingList', () => {
    expect(
      actions.editShoppingList(0, 'New Shopping text')
    ).toEqual(
      {type: actions.EDIT_SHOPPING_LIST, id: 0, text: 'New Shopping text'}
    );
  });

});
