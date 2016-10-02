import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import {blue500} from 'material-ui/styles/colors';
import ActionAddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart'
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const ContentList = ({handleDialog}) => (
  <List>
    <ListItem
      primaryText="Nova Lista"
      leftIcon={<ActionAddShoppingCart color={blue500} />}
      onTouchTap={handleDialog} />

    <Divider />

    <ListItem primaryText="Compras do Mês" leftIcon={<ActionShoppingCart />} />
    <ListItem primaryText="Coisas da Jerssica" leftIcon={<ActionShoppingCart />} />
    <ListItem primaryText="Noite Mexicana" leftIcon={<ActionShoppingCart />} />
  </List>
)

class ShoppingList extends Component {
  state = {
    open: false,
  };

  handleDialog = () => {
    this.setState({open: !this.state.open});
  };

  render() {
    const actions = [
      <RaisedButton label="Salvar" primary={true} onTouchTap={this.handleDialog} />
    ]

    return (
        <div>
          <ContentList handleDialog={this.handleDialog}/>
          <Dialog actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleDialog}>
            <TextField
              hintText="Compras do Mês"
              floatingLabelText="Nome da Lista"
              floatingLabelFixed={true}
              fullWidth={true} />
          </Dialog>
        </div>
    )
  }
}

export default ShoppingList;
