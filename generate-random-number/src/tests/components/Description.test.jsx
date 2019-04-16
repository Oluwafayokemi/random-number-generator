import React from 'react';
import { shallow } from 'enzyme';
import Description from '../../components/Description';

describe('Description component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Description />)
    expect(wrapper).toBeTruthy();
  });
});