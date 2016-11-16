import React, { PropTypes } from 'react';

const wrapperStyles = {
  backgroundColor: '#4B698B',
  padding: 10,
}
const inputStyles = {
  padding: '5px 10px',
  width: '100%',
  color: '#444'
}

const AddForm = ({ onAddFormSubmit, placeholderText }) => {
  let input;
  return (
    <div style={wrapperStyles}>
      <form onSubmit={e => {
          e.preventDefault();
          onAddFormSubmit(input);
        }}>
        <input ref={node => {input = node}} type={"text"} placeholder={placeholderText} style={inputStyles} />
      </form>
    </div>
  )
}

AddForm.propTypes = {
  onAddFormSubmit: PropTypes.func.isRequired,
  placeholderText: PropTypes.string.isRequired
}

export default AddForm;
