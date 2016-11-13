import React, { Component } from 'react';
import { Link } from 'react-router';
import { AddShoppingItemForm } from '../containers/AddShoppingItemForm';
import * as containers from '../containers/ShoppingListDetail';

class ShoppingListDetail extends Component {
  render() {
    return (
      <div>
        <Link to={'/'}>Back</Link>
        <h3>Listas de Compras {this.props.params.listId}</h3>
        <AddShoppingItemForm />
        <containers.ShoppingListDetail />
      </div>
    );
  }
}

export default ShoppingListDetail;
