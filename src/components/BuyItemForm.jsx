import React from 'react';

const BuyItemForm = ({ openDialog, onCloseDialog }) => {
  let quantity;
  let price;

  return (
    <div>
      {openDialog ? (
      <form onSubmit={e => {
          e.preventDefault();
          console.log(quantity.value, price.value);
        }}>
        <input ref={node => {quantity = node}} type={"number"} placeholder={"quantidade"} />
        <input ref={node => {price = node}} placeholder={"preço"} />
        <button type={"submit"}>comprar</button>
        <button type={"button"} onClick={onCloseDialog}>X</button>
      </form> ) : null }
    </div>
  )
}

export default BuyItemForm;
