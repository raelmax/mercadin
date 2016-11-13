import React, { Component } from 'react';
import { Link } from 'react-router';
import { AddShoppingListForm } from '../containers/AddShoppingListForm';
import * as containers from '../containers/ShoppingList';

class ShoppingList extends Component {
  render() {
    return (
      <div>
        <h3><Link to={'/'}>Listas de Compras</Link></h3>
        <AddShoppingListForm />
        <containers.ShoppingList />
      </div>
    );
  }
}

export default ShoppingList;
