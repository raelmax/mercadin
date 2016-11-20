import React from 'react';
import { shallow } from 'enzyme';
import AddForm from './AddForm';

describe('Component: <AddForm />', () => {
  it('renders without crashing', () => {
    shallow(<AddForm onAddFormSubmit={() => {}} placeholderText="add new item" />);
  });

  it('renders with correct text', () => {
    const addForm = shallow(<AddForm onAddFormSubmit={() => {}} placeholderText="add new item" />);
    expect(addForm.find('input').props().placeholder).toEqual('add new item');
  });

  it('call onAddFormSubmit prop on form submit', () => {
    const onAddFormSubmit = jest.fn();
    const addForm = shallow(<AddForm onAddFormSubmit={onAddFormSubmit} placeholderText="add new item" />);
    const fakeEvent = jest.fn().mockReturnValue({preventDefault: () => true});

    addForm.find('form').simulate('submit', fakeEvent());
    expect(onAddFormSubmit).toHaveBeenCalled();
  });
});
