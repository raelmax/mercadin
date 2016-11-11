import React, { Component } from 'react';
import { Link } from 'react-router';
import AddForm from './AddForm';
import * as containers from '../containers/ShoppingListDetail';

class ShoppingListDetail extends Component {
  render() {
    console.log(containers);
    return (
      <div>
        <Link to={'/'}>Back</Link>
        <h3>Listas de Compras {this.props.params.listId}</h3>
        <AddForm />
        <containers.ShoppingListDetail />
      </div>
    );
  }
}

export default ShoppingListDetail;
