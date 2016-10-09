import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import {blue500} from 'material-ui/styles/colors';
import ActionAddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart'
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const ContentList = ({handleDialog, items}) => (
  <List>
    <ListItem
      primaryText="Nova Lista"
      leftIcon={<ActionAddShoppingCart color={blue500} />}
      onTouchTap={handleDialog} />
    <Divider />

    {Object.keys(items).map((key) =>
      <ListItem key={items[key].id} primaryText={items[key].name} leftIcon={<ActionShoppingCart />} />
    )}
  </List>
)

class ShoppingList extends Component {
  state = {
    open: false
  };

  addListItem = (e) => {
    e.preventDefault();

    this.props.addItemHandle(this.listNameInput.getValue());
    this.setState({open: false});
  };

  handleDialog = () => {
    this.setState({open: !this.state.open});
  };

  render() {
    return (
        <div>
          <ContentList handleDialog={this.handleDialog} items={this.props.listItems} />
          <Dialog modal={false} open={this.state.open} onRequestClose={this.handleDialog}>
            <form onSubmit={this.addListItem}>
              <TextField
                ref={(c) => this.listNameInput = c}
                hintText="Compras do Mês"
                floatingLabelText="Nome da Lista"
                floatingLabelFixed={true}
                fullWidth={true} />
              <RaisedButton style={{marginTop: 15, float: "right"}} label="Salvar" primary={true} type="submit" />
            </form>
          </Dialog>
        </div>
    )
  }
}

export default ShoppingList;
