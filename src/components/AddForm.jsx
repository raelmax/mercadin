import React from 'react';
import { connect } from 'react-redux';
import { addShoppingList } from '../actions/ShoppingListActions';

let AddForm = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addShoppingList(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

AddForm = connect()(AddForm);

export default AddForm;
