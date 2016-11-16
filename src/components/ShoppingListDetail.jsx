import React, { Component } from 'react';
import * as containers from '../containers/ShoppingListDetail';
import { AddShoppingItemForm } from '../containers/AddShoppingItemForm';
import { HeaderDetail } from '../containers/HeaderDetail';
import { ListItemDialog } from '../containers/ListItemDialog';
import { TotalInfo } from '../containers/ShoppingListInfo';

class ShoppingListDetail extends Component {
  render() {
    return (
      <div>
        <HeaderDetail backButton={true} />
        <AddShoppingItemForm />
        <containers.ShoppingListDetail />
        <ListItemDialog />
        <TotalInfo />
      </div>
    );
  }
}

export default ShoppingListDetail;
