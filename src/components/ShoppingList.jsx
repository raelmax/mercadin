import React, { Component } from 'react';
import { AddShoppingListForm } from '../containers/AddShoppingListForm';
import * as containers from '../containers/ShoppingList';
import Header from './Header';

class ShoppingList extends Component {
  render() {
    return (
      <div>
        <Header text={'Minhas Listas'} />
        <AddShoppingListForm />
        <containers.ShoppingList />
      </div>
    );
  }
}

export default ShoppingList;
