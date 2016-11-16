import React, { PropTypes } from 'react';

const itemStyles = {
  borderBottom: '1px solid #D4DDE7',
  padding: '10px 5px',
  color: '#2B4C6F',
  cursor: 'pointer',
}

const ListItem = ({ onClick, text, id, bought }) => {
  let styles;

  if (bought) {
    styles = Object.assign({}, itemStyles, {
      textDecoration: 'line-through'
    })
  } else {
    styles = itemStyles;
  }

  return (
    <li onClick={onClick} style={styles}>{text}</li>
  )
}

ListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default ListItem;
