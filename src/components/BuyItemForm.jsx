import React, { PropTypes } from 'react';

const BuyItemForm = ({ openDialog, listId, id, onCloseDialog, onSubmit }) => {
  let price;
  let quantity;

  return (
    <div>
      {openDialog ? (
      <form onSubmit={e => {
          e.preventDefault();
          onSubmit(listId, id, quantity.value, price.value);
        }}>
        <input ref={node => {quantity = node}} type={"number"} placeholder={"quantidade"} />
        <input ref={node => {price = node}} placeholder={"preço"} />
        <button type={"submit"}>comprar</button>
        <button type={"button"} onClick={onCloseDialog}>X</button>
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
