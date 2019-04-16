import React from 'react';
import { shallow } from 'enzyme';
import DefaultSelect from '../../common/DefaultSelect';

it('renders without crashing', () => {
    const wrapper = shallow(<DefaultSelect />)
    expect(wrapper).toBeTruthy();
});
