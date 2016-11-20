import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';

describe('Component: <ListItem />', () => {
  it('renders without crashing', () => {
    shallow(<ListItem onClick={() => {}} text="list item" id={1} />);
  });

  it('renders with correct text', () => {
    const listItem = shallow(<ListItem onClick={() => {}} text="list item" id={1} />);

    expect(listItem.text()).toEqual('list item');
  });

  it('renders with correct html tag', () => {
    const listItem = shallow(<ListItem onClick={() => {}} text="list item" id={1} />);

    expect(listItem.type()).toEqual('li');
  });

  it('renders with bought class if necessary', () => {
    const listItem = shallow(<ListItem onClick={() => {}} text="list item" id={1} bought={1} />);
    const { className } = listItem.props();

    expect(className).toMatch(/list-default-item-bought/);
  });

  it('call onClick prop on component click', () => {
    const onClick = jest.fn();
    const listItem = shallow(<ListItem onClick={onClick} text="list item" id={1} bought={1} />);

    listItem.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
