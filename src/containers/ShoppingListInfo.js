import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Total from '../components/Total';

const mapStateToProps = (state, ownProps) => {
  const listId = parseInt(ownProps.params.listId, 10);
  const items = state.shoppingList.find(
    shoppingList => shoppingList.id === listId
  ).items;

  return {
    total: items.reduce((total, num) => { return total + parseInt(num.price, 10) || 0}, 0),
  }
}

export const TotalInfo = withRouter(connect(
  mapStateToProps
)(Total));
