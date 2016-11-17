import React, { PropTypes } from 'react';

const AddForm = ({ onAddFormSubmit, placeholderText }) => {
  let input;
  return (
    <div className="add-form-wrapper">
      <form onSubmit={e => {
          e.preventDefault();
          onAddFormSubmit(input);
        }}>
        <input className="add-form-input" ref={node => {input = node}} type={"text"} placeholder={placeholderText} />
      </form>
    </div>
  )
}

AddForm.propTypes = {
  onAddFormSubmit: PropTypes.func.isRequired,
  placeholderText: PropTypes.string.isRequired
}

export default AddForm;
