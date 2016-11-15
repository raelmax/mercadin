import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import List from '../components/List';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    listItems: state.shoppingList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onListItemClick: (listId, id) => {
      dispatch(push(`/l/${id}`));
    }
  }
}

export const ShoppingList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
