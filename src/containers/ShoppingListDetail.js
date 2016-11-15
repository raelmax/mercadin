import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import List from '../components/List';
import { openItemBuyDialog } from '../actions/ListItemActions';

const mapStateToProps = (state, ownProps) => {
  const listId = parseInt(ownProps.params.listId, 10);
  return {
    listItems: state.shoppingList.find(
      shoppingList => shoppingList.id === listId
    ).items,
    listId: listId
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onListItemClick: (listId, id) => {
      dispatch(openItemBuyDialog(listId, id));
    }
  }
}

export const ShoppingListDetail = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(List))
