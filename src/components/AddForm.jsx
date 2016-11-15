import React, { PropTypes } from 'react';

const AddForm = ({ onAddFormSubmit, buttonText }) => {
  let input;
  return (
    <form onSubmit={e => {
        e.preventDefault();
        onAddFormSubmit(input);
      }}>
      <input ref={node => {input = node}} type={"text"} />
      <button type={"submit"}>{buttonText}</button>
    </form>
  )
}

AddForm.propTypes = {
  onAddFormSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
}

export default AddForm;
