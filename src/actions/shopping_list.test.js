import * as actions from './shopping_list';

describe('shopping list actions', () => {

  it('addShoppingList', () => {
    expect(
      actions.addShoppingList('My ShoppingList')
    ).toEqual({type: actions.ADD_SHOPPING_LIST, name: 'My ShoppingList'});
  });

  it('removeShoppingList', () => {
    expect(
      actions.removeShoppingList(1)
    ).toEqual({type: actions.REMOVE_SHOPPING_LIST, id: 1});
  });

  it('editShoppingList', () => {
    expect(
      actions.editShoppingList(1, 'New Shopping Name')
    ).toEqual(
      {type: actions.EDIT_SHOPPING_LIST, id: 1, name: 'New Shopping Name'}
    );
  });

});