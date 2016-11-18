import React from 'react';
import * as containers from '../containers/Index';

const ShoppingListDetail = () => (
  <div>
    <containers.HeaderDetail />
    <containers.AddShoppingItemForm />
    <containers.ShoppingListDetail />
    <containers.ListItemDialog />
    <containers.ShoppingListInfo />
  </div>
);

export default ShoppingListDetail;
