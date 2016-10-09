import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


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
          <div>{this.props.children}</div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Mercadin;
