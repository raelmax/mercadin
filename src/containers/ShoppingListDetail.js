import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import { editShoppingList } from '../actions/ShoppingListActions';
import List from '../components/List';

const mapStateToProps = (state, ownProps) => {
  return {
    listItems: state.shoppingList.find(
      shoppingList => shoppingList.id === parseInt(ownProps.params.listId, 10)
    ).items
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onListItemClick: (id, text) => {
      dispatch(editShoppingList(id, text));
    }
  }
}

export const ShoppingListDetail = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(List))
