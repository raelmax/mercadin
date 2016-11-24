import React, { PropTypes } from 'react';

const BuyItemForm = ({ openDialog, listId, item, onCloseDialog, onSubmit }) => {
  let text, price, quantity;

  return (
    <div>
      {openDialog ? (
      <form className="buy-item-form" onSubmit={e => {
          e.preventDefault();
          onSubmit(listId, item.id, text.value, quantity.value, price.value);
        }}>
        <input className="buy-item-input" ref={node => {text = node}} type="text" placeholder="Nome" defaultValue={item.text}/>
        <input className="buy-item-input" ref={node => {quantity = node}} type="number" placeholder="Quantidade" defaultValue={item.quantity} autoFocus={true} />
        <input className="buy-item-input" ref={node => {price = node}} type="number" step="any" min={0} placeholder="Preço" defaultValue={item.price} />
        <button className="buy-item-button" type="submit">comprar</button>
        <button className="buy-item-button buy-item-button-cancel" type="button" onClick={onCloseDialog}>cancelar</button>
      </form> ) : null }
    </div>
  )
}

BuyItemForm.propTypes = {
  openDialog: PropTypes.bool.isRequired,
  listId: PropTypes.number,
  item: PropTypes.object,
  onCloseDialog: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default BuyItemForm;
