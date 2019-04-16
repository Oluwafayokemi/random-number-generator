import React from 'react';
import { shallow } from 'enzyme';
import Summary from '../../components/Summary';

const props = {
  list: [],
  maxPhoneNumber: '',
  minPhoneNumber: ''
}

describe('Summary component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Summary {...props} />)
    expect(wrapper).toBeTruthy();
  });
})