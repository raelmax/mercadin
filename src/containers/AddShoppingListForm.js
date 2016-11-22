import { connect } from 'react-redux';
import { addShoppingList } from '../actions/ShoppingListActions';
import AddForm from '../components/AddForm';

const mapDispatchToProps = (dispatch) => {
  return {
    onAddFormSubmit: (input) => {
      if (!input.value.trim()) {
        return
      }
      const id = new Date().getTime();
      dispatch(addShoppingList(id, input.value));
      input.value = '';
    },
    placeholderText: 'Ex: Nova Lista de Compras'
  }
}

export const AddShoppingListForm = connect(
  null,
  mapDispatchToProps
)(AddForm);
