import React from 'react';
import { shallow, mount } from 'enzyme';
import List from './List';

describe('Component: <List />', () => {
  it('renders without crashing', () => {
    shallow(<List listItems={[]} listId={1} onListItemClick={() => {}} />);
  });

  it('renders with correct html tag', () => {
    const list = shallow(<List listItems={[]} listId={1} onListItemClick={() => {}} />);

    expect(list.type()).toEqual('ul');
  });

  it('renders with ListItem components', () => {
    const listItems = [{text: "list item", id: 1}, {text: "list item 2", id: 2}];
    const list = mount(<List listItems={listItems} listId={1} onListItemClick={() => {}} />);

    expect(list.find('li').length).toEqual(2);
  });

  it('call onListItemClick prop on component child click', () => {
    const onListItemClick = jest.fn();
    const listItems = [{text: "list item", id: 1}, {text: "list item 2", id: 2}];
    const list = mount(<List listItems={listItems} listId={1} onListItemClick={onListItemClick} />);

    list.find('li').first().simulate('click');
    expect(onListItemClick).toHaveBeenCalled();
  });
});
