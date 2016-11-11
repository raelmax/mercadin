import React, { Component } from 'react';
import AddForm from './AddForm';
import ShoppingList from '../containers/ShoppingList';

class Mercadin extends Component {
  render() {
    return (
      <div>
        <AddForm />
        <ShoppingList />
      </div>
    );
  }
}

export default Mercadin;
