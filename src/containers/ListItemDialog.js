import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import BuyItemForm from '../components/BuyItemForm';
import { openBuyDialog } from '../actions/ListItemActions';

const mapStateToProps = (state, ownProps) => {
  return {
    openDialog: state.listItemDialog.openDialog
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseDialog: () => {
      dispatch(openBuyDialog());
    }
  }
}

export const ListItemDialog = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyItemForm));
