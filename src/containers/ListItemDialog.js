import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import BuyItemForm from '../components/BuyItemForm';
import { toggleBuyDialog, setItemAttributes, removeItemFromList } from '../actions/ListItemActions';

const mapStateToProps = (state, ownProps) => {
  const listId = state.listItemDialog.listId;
  const item = state.shoppingList.find(
    shoppingList => shoppingList.id === listId
  ).items.find(item => item.id === state.listItemDialog.id);

  return {
    openDialog: state.listItemDialog.openDialog,
    listId: listId,
    item: item
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseDialog: () => {
      dispatch(toggleBuyDialog());
    },
    onSubmit: (listId, id, text, quantity, price) => {
      dispatch(setItemAttributes(listId, id, text, quantity, price));
      dispatch(toggleBuyDialog());
    },
    onDelete: (listId, id) => {
      dispatch(removeItemFromList(listId, id));
      dispatch(toggleBuyDialog());
    }
  }
}

export const ListItemDialog = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyItemForm));
