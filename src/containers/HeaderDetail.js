import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from '../components/Header';

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.shoppingList.find(
      shoppingList => shoppingList.id === parseInt(ownProps.params.listId, 10)
    ).text,
    backButton: ownProps.backButton
  }
}

export const HeaderDetail = withRouter(connect(
  mapStateToProps
)(Header));
