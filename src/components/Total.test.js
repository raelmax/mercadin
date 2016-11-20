import React from 'react';
import { shallow } from 'enzyme';
import Total from './Total';

describe('Component: <Total />', () => {
  it('renders without crashing', () => {
    shallow(<Total />);
  });

  it('renders with correct value', () => {
    const total = shallow(<Total total={0.5} />);

    expect(total.text()).toEqual("Total: R$ 0.5");
  });

});
