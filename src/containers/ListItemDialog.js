import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import BuyItemForm from '../components/BuyItemForm';
import { openBuyDialog } from '../actions/ListItemActions';

const mapStateToProps = (state, ownProps) => {
  return {
    openDialog: state.listItemDialog.openDialog,
    listId: state.listItemDialog.listId,
    id: state.listItemDialog.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseDialog: (listId, id) => {
      dispatch(openBuyDialog(listId, id));
    }
  }
}

export const ListItemDialog = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyItemForm));
