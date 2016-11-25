import React from 'react';

const Total = ({ total = 0 }) => {
  const options = {style: 'currency', currency: 'BRL'};
  const numberFormat = new Intl.NumberFormat('pt-BR', options);

  total = numberFormat.format(total).replace('R$', 'R$ '); // fix space between symbol and number

  return (
    <p className="total-info">Total: {total}</p>
  )
}

export default Total;
