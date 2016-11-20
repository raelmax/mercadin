import React from 'react';
import { shallow, mount } from 'enzyme';
import BuyItemForm from './BuyItemForm';

describe('Component: <BuyItemForm />', () => {
  it('renders without crashing', () => {
    shallow(<BuyItemForm openDialog={true} listId={1} id={1} onCloseDialog={() => {}} onSubmit={() => {}} />);
  });

  it('not render if openDialog is false', () => {
    const buyItemForm = shallow(
      <BuyItemForm openDialog={false} listId={1} id={1} onCloseDialog={() => {}} onSubmit={() => {}} />
    );

    expect(buyItemForm.find('form').length).toEqual(0);
  });

  it('renders if openDialog is true', () => {
    const buyItemForm = shallow(
      <BuyItemForm openDialog={true} listId={1} id={1} onCloseDialog={() => {}} onSubmit={() => {}} />
    );

    expect(buyItemForm.find('form').length).toEqual(1);
  });

  it('call onCloseDialog prop on cancel button click', () => {
    const onCloseDialog = jest.fn();
    const buyItemForm = shallow(
      <BuyItemForm openDialog={true} listId={1} id={1} onCloseDialog={onCloseDialog} onSubmit={() => {}} />
    );

    buyItemForm.find('.buy-item-button-cancel').simulate('click');
    expect(onCloseDialog).toHaveBeenCalled();
  });

  it('call onSubmit prop on form submit', () => {
    const onSubmit = jest.fn();
    const buyItemForm = mount(
      <BuyItemForm openDialog={true} listId={1} id={1} onCloseDialog={() => {}} onSubmit={onSubmit} />
    );
    const fakeEvent = jest.fn().mockReturnValue({preventDefault: () => true});

    buyItemForm.find('form').simulate('submit', fakeEvent());
    expect(onSubmit).toHaveBeenCalled();
  });
});
