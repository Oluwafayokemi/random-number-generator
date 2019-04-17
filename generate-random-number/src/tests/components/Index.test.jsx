import React from 'react';
import { shallow, mount } from 'enzyme';
import Index from '../../components/Index';
import { spy } from 'sinon';

describe('Index component', () => {
  const props = {
    handleChange: jest.fn(),
    handleSelectChange: jest.fn(),
    handleSubmit: jest.fn(),
  }
  it('renders without crashing', () => {
    const wrapper = shallow(<Index {...props} />)
    expect(wrapper).toBeTruthy();
  });

  it('starts with setting value to empty string', () => {
    const wrapper = mount(<Index />);
    wrapper.setState({
      value: '',
      selectedOption: '',
      list: '',
      maxPhoneNumber: '',
      minPhoneNumber: ''
    });
    const initialInput = wrapper.find('input').at(0);
    initialInput.simulate('focus')
    initialInput.simulate('change', { target: { value: '' } })
    expect(wrapper.state('value')).toEqual('');
    expect(initialInput.props().value).toEqual('');
  });

  it('submit forms and generate list in ascending order', () => {
    const wrapper = mount(<Index {...props} />);
    const input = wrapper.find('input').at(0);
    const select = wrapper.find('.list__dropdown-indicator').at(0);
    const form = wrapper.find('form');
    input.simulate('change', { target: { value: '21' } })
    select.simulate('mouseDown', { button: 0 })
    expect(wrapper.find('.list__option').length).toEqual(2);
    expect(wrapper.find('.list__option').first().simulate('click'));
    form.simulate('submit', { preventDefault: jest.fn() })
    expect(wrapper.state('selectedOption')).toEqual({ value: 1, label: 'Ascending' })
    expect(wrapper.instance().state.value).toEqual('21');
    expect(wrapper).toBeTruthy();
  });
  it('submit forms and generate list in descending order', () => {
    const wrapper = mount(<Index {...props} />);
    const input = wrapper.find('input').at(0);
    const select = wrapper.find('.list__dropdown-indicator').at(0);
    const form = wrapper.find('form');
    input.simulate('change', { target: { value: '21' } })
    select.simulate('mouseDown', { button: 0 })
    expect(wrapper.find('.list__option').length).toEqual(2);
    expect(wrapper.find('.list__option').last().simulate('click'));
    form.simulate('submit', { preventDefault: jest.fn() })
    expect(wrapper.state('selectedOption')).toEqual({ value: 2, label: 'Descending' })
    expect(wrapper.instance().state.value).toEqual('21');
    expect(wrapper).toBeTruthy();
  });

  it('calld reload function ', () => {

    const wrapper = mount(<Index {...props} />);
    const clearBtn = wrapper.find('.clear').at(0);
    clearBtn.simulate('click');
    expect(wrapper.instance().state.value).toEqual('')
    expect(wrapper.instance().state.selectedOption).toEqual('')
    expect(wrapper.instance().state.list).toEqual('')
    expect(wrapper.instance().state.maxPhoneNumber).toEqual('')
    expect(wrapper.instance().state.minPhoneNumber).toEqual('')

  });
  it('calls onClickSaveFile function ', () => {
    const props2 = {
      saveAs: jest.fn().mockResolvedValueOnce([])
    }
    const saveAs = spy();
    const wrapper = mount(<Index {...props2} />);
    const save = wrapper.find('.download').first();
    save.simulate('click');
    expect(saveAs.callCount).toEqual(0)
  });


});