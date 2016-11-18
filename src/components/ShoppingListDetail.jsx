import React, { Component } from 'react';
import * as containers from '../containers/Index';

class ShoppingListDetail extends Component {
  render() {
    return (
      <div>
        <containers.HeaderDetail />
        <containers.AddShoppingItemForm />
        <containers.ShoppingListDetail />
        <containers.ListItemDialog />
        <containers.ShoppingListInfo />
      </div>
    );
  }
}

export default ShoppingListDetail;
