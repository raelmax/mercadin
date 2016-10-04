import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import ShoppingList from './ShoppingList'


class Mercadin extends Component {
  state = {
    pageName: "shoppinglist",
    shoppingLists: []
  };

  addItemHandle = (itemName) => {
    let updatedList = this.state.shoppingLists.concat(
      [{id: new Date().getTime(), name: itemName}]
    );

    updatedList.sort((a, b) => b.id - a.id);

    this.setState({
      shoppingLists: updatedList
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Mercadin" showMenuIconButton={false} />
          <ShoppingList listItems={this.state.shoppingLists} addItemHandle={this.addItemHandle} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Mercadin;
