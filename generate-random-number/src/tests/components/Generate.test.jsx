import React from 'react';
import { shallow } from 'enzyme';
import Generate from '../../components/Generate';

const props = {
  handleSubmit: jest.fn(),
  handleChange: jest.fn(),
  value: 3,
  handleSelectChange: jest.fn(),
  selectedOption: 'Ascending'

}
describe('Generate component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Generate {...props} />)
    expect(wrapper).toBeTruthy();
  });
});