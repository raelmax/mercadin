import React, { PropTypes } from 'react';
import ListItem from './ListItem';

const List = ({ listItems, listId, onListItemClick }) => (
  <ul>
    {listItems.map(listItem =>
      <ListItem
        key={listItem.id}
        {...listItem}
        onClick={() => onListItemClick(listId, listItem.id)}
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
