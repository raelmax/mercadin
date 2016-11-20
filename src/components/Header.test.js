import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Component: <Header />', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders with correct text', () => {
    const header = shallow(<Header text="Test Header" />);

    expect(header.find('h1').text()).toEqual('Test Header');
  });

  it('renders back button if necessary', () => {
    const header = shallow(<Header text="Test Header" backButton={true} />);
    expect(header.find('.header-back-button').length).toEqual(1);
  });
});
