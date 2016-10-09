import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import ShoppingList from './ShoppingList';
import ProductList from './ProductList';


class Mercadin extends Component {
  state = {
    pageName: "shoppinglist",
    shoppingLists: {}
  };

  addItemHandle = (itemName) => {
    let shoppingLists = this.state.shoppingLists;
    let listId = new Date().getTime();

    shoppingLists[listId] = {name: itemName, products: []};

    this.setState({
      shoppingLists: shoppingLists
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Mercadin" showMenuIconButton={false} />
          {(() => {
            switch (this.state.pageName) {
              case "shoppinglist":
                return <ShoppingList listItems={this.state.shoppingLists} addItemHandle={this.addItemHandle} />;
              case "productlist":
                return <ProductList />;
              default:
                return "#FFFFFF";
            }
          })()}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Mercadin;
