import { connect } from 'react-redux';
import { withRouter } from 'react-router';
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
    onListItemClick: (id) => {
      console.log(`Item Comprado ${id}`);

    }
  }
}

export const ShoppingListDetail = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(List))
