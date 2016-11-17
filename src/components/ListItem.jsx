import React, { PropTypes } from 'react';

const ListItem = ({ onClick, text, id, bought }) => (
  <li className={"list-default-item" + (bought ? " list-default-item-bought" : "")}
    onClick={onClick}>{text}</li>
)

ListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default ListItem;
