import React, { PropTypes } from 'react';

const formStyles = {
  position: 'absolute',
  backgroundColor: '#D4DDE7',
  border: '1px solid #133253',
  margin: '-75px 0 0 -125px',
  maxWidth: '250px',
  height: '150px',
  padding: '20px',
  left: '50%',
  top: '50%',
}

const inputStyles = {
  border: '1px solid #f9f9f9',
  padding: '10px',
  width: '100%',
  textAlign: 'right',
  marginBottom: '2px'
}

let buttonStyles = {
  backgroundColor: '#2B4C6F',
  border: 'none',
  padding: '5px',
  color: '#fff',
  width: '50%',
}

let cancelButtonStyles = Object.assign({}, buttonStyles, {
  backgroundColor: '#A5B7CA'
})


const BuyItemForm = ({ openDialog, listId, id, onCloseDialog, onSubmit }) => {
  let price;
  let quantity;

  return (
    <div>
      {openDialog ? (
      <form style={formStyles} onSubmit={e => {
          e.preventDefault();
          onSubmit(listId, id, quantity.value, price.value);
        }}>
        <input ref={node => {quantity = node}} type={"number"} placeholder={"quantidade"} style={inputStyles} />
        <input ref={node => {price = node}} placeholder={"preço"} style={inputStyles} />
        <button type={"submit"} style={buttonStyles}>comprar</button>
        <button type={"button"} onClick={onCloseDialog} style={cancelButtonStyles}>cancelar</button>
      </form> ) : null }
    </div>
  )
}

BuyItemForm.propTypes = {
  openDialog: PropTypes.bool.isRequired,
  listId: PropTypes.number,
  id: PropTypes.number,
  onCloseDialog: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default BuyItemForm;
