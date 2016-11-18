import React from 'react';
import Header from './Header';
import * as containers from '../containers/Index';

const ShoppingList = () => (
  <div>
    <Header text={'Minhas Listas'} />
    <containers.AddShoppingListForm />
    <containers.ShoppingList />
  </div>
);

export default ShoppingList;
