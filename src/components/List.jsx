import React, { PropTypes } from 'react';
import ListItem from './ListItem';

const List = ({ listItems, onListItemClick }) => (
  <ul>
    {listItems.map(listItem =>
      <ListItem
        key={listItem.id}
        {...listItem}
        onClick={() => null}
      />
    )}
  </ul>
)

List.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onListItemClick: PropTypes.func.isRequired
}

export default List;
