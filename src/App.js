import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import ShoppingList from './ShoppingList'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Mercadin" showMenuIconButton={false} />
          <ShoppingList />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
