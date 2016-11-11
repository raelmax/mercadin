import { connect } from 'react-redux';
import { editShoppingList } from '../actions/ShoppingListActions';
import List from '../components/List';

const mapStateToProps = (state) => {
  return {
    listItems: state.shoppingList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onListItemClick: (id, text) => {
      dispatch(editShoppingList(id, text));
    }
  }
}

const ShoppingList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default ShoppingList;
