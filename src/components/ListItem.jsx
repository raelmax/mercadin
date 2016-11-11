import React, { PropTypes } from 'react';

const ListItem = ({ onClick, text }) => (
  <li onClick={onClick}>
    {text}
  </li>
)

ListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default ListItem;
