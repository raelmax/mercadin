import React, { Component } from 'react';
import Header from './Header';
import * as containers from '../containers/Index';

class ShoppingList extends Component {
  render() {
    return (
      <div>
        <Header text={'Minhas Listas'} />
        <containers.AddShoppingListForm />
        <containers.ShoppingList />
      </div>
    );
  }
}

export default ShoppingList;
