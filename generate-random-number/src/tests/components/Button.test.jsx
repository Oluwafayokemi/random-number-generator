import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button';

const props = {
  reload: jest.fn(),
  onClickSaveFile: jest.fn()
}

describe('Button component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Button {...props} />)
    expect(wrapper).toBeTruthy();
  });
});