import React, { PropTypes } from 'react';
import ListItem from './ListItem';

const listStyles = {
  padding: '15px 10px',
  listStyle: 'none',
  margin: '0 0 40px 0',
}

const List = ({ listItems, listId, onListItemClick }) => (
  <ul style={listStyles}>
    {listItems.map(listItem =>
      <ListItem
        key={listItem.id}
        {...listItem}
        onClick={() => onListItemClick(listId, listItem.id)}
        bought={(listItem.price && listItem.quantity)}
      />
    )}
  </ul>
)

List.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  listId: PropTypes.number,
  onListItemClick: PropTypes.func.isRequired
}

export default List;
