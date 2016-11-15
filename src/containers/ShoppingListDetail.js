import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import List from '../components/List';
import { openBuyDialog } from '../actions/ListItemActions';

const mapStateToProps = (state, ownProps) => {
  return {
    listItems: state.shoppingList.find(
      shoppingList => shoppingList.id === parseInt(ownProps.params.listId, 10)
    ).items
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onListItemClick: (id) => {
      dispatch(openBuyDialog(id));
    }
  }
}

export const ShoppingListDetail = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(List))
