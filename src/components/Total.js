import React from 'react';

const totalStyles = {
  backgroundColor: '#133253',
  textAlign: 'right',
  position: 'fixed',
  padding: '10px',
  color: '#fff',
  width: '100%',
  height: '40px',
  bottom: 0,
  margin: 0,
}

const Total = ({ total = 0 }) => (
    <p style={totalStyles}>Total: R$ {total}</p>
)

export default Total;
