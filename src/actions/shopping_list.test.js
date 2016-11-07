import * as actions from './shopping_list';

describe('shopping list actions', () => {

  it('addShoppingList', () => {
    expect(
      actions.addShoppingList('My ShoppingList')
    ).toEqual({type: actions.ADD_SHOPPING_LIST, id: 0, name: 'My ShoppingList', items: []});
  });

  it('removeShoppingList', () => {
    expect(
      actions.removeShoppingList(0)
    ).toEqual({type: actions.REMOVE_SHOPPING_LIST, id: 0});
  });

  it('editShoppingList', () => {
    expect(
      actions.editShoppingList(0, 'New Shopping Name')
    ).toEqual(
      {type: actions.EDIT_SHOPPING_LIST, id: 0, name: 'New Shopping Name'}
    );
  });

});
