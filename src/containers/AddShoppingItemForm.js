import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addItemToList } from '../actions/ListItemActions';
import AddForm from '../components/AddForm';

const mapStateToTrops = (dispatch, ownProps) => {
  return {
    placeholderText: 'Ex: Feijão, Azeitonas, Arroz...'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddFormSubmit: (input) => {
      if (!input.value.trim()) {
        return
      }
      const listId = parseInt(ownProps.params.listId, 10);
      dispatch(addItemToList(listId, input.value));
      input.value = '';
    }
  }
}

export const AddShoppingItemForm = withRouter(connect(
  mapStateToTrops,
  mapDispatchToProps
)(AddForm));
