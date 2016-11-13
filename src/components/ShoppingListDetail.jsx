import React, { Component } from 'react';
import { Link } from 'react-router';
import { AddShoppingItemForm } from '../containers/AddShoppingItemForm';
import * as containers from '../containers/ShoppingListDetail';
import { HeaderDetail } from '../containers/HeaderDetail';

class ShoppingListDetail extends Component {
  render() {
    return (
      <div>
        <Link to={'/'}>Back</Link>
        <HeaderDetail />
        <AddShoppingItemForm />
        <containers.ShoppingListDetail />
      </div>
    );
  }
}

export default ShoppingListDetail;
