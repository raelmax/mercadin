import React, { PropTypes } from 'react';

const ListItem = ({ onClick, text, id, bought }) => (
  <li onClick={onClick} style={{textDecoration: bought ? 'line-through' : 'none'}}>{text}</li>
)

ListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default ListItem;
