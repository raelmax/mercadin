import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import BuyItemForm from '../components/BuyItemForm';
import { toggleBuyDialog, setItemAttributes } from '../actions/ListItemActions';

const mapStateToProps = (state, ownProps) => {
  return {
    openDialog: state.listItemDialog.openDialog,
    listId: state.listItemDialog.listId,
    id: state.listItemDialog.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseDialog: () => {
      dispatch(toggleBuyDialog());
    },
    onSubmit: (listId, id, quantity, value) => {
      dispatch(setItemAttributes(listId, id, quantity, value));
      dispatch(toggleBuyDialog());
    }
  }
}

export const ListItemDialog = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyItemForm));
