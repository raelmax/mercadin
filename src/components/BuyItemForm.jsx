import React, { PropTypes } from 'react';

const BuyItemForm = ({ openDialog, listId, id, onCloseDialog, onSubmit }) => {
  let price;
  let quantity;

  return (
    <div>
      {openDialog ? (
      <form className="buy-item-form" onSubmit={e => {
          e.preventDefault();
          onSubmit(listId, id, quantity.value, price.value);
        }}>
        <input className="buy-item-input" ref={node => {quantity = node}} type={"number"} placeholder={"quantidade"} />
        <input className="buy-item-input" ref={node => {price = node}} type={"number"} step={"any"} min={0} placeholder={"preço"} />
        <button className="buy-item-button" type={"submit"}>comprar</button>
        <button className="buy-item-button buy-item-button-cancel" type={"button"} onClick={onCloseDialog}>cancelar</button>
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
