import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import {blue500} from 'material-ui/styles/colors';
import ActionAddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart'
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const ContentList = ({handleDialog, items, openList}) => (
  <List>
    <ListItem
      primaryText="Nova Lista"
      leftIcon={<ActionAddShoppingCart color={blue500} />}
      onTouchTap={handleDialog} />
    <Divider />
    <ListItem key="1" primaryText="Compras do Mês" onTouchTap={() => openList(1)} leftIcon={<ActionShoppingCart />} />
    <ListItem key="2" primaryText="Jantar Romântico" onTouchTap={() => openList(2)} leftIcon={<ActionShoppingCart  />} />
    <ListItem key="3" primaryText="Almoço de Domingo" onTouchTap={() => openList(3)} leftIcon={<ActionShoppingCart />} />
  </List>
)

class ShoppingList extends Component {
  state = {
    open: false
  };

  addListItem = (e) => {
    e.preventDefault();
    //this.props.addItemHandle(this.listNameInput.getValue());
    this.setState({open: false});
  };

  handleDialog = () => {
    this.setState({open: !this.state.open});
  };

  openList = (key) => {
      this.context.router.push('/' + key);
  };

  render() {
    return (
        <div>
          <ContentList handleDialog={this.handleDialog} items={this.props.listItems} openList={this.openList}/>
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

ShoppingList.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default ShoppingList;
