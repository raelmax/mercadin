import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ListItem = ({ onClick, text, id }) => (
  <li onClick={onClick}>
    <Link to={`/l/${id}`}>{text}</Link>
  </li>
)

ListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default ListItem;
