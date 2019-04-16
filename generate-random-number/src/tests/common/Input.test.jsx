import React from 'react';
import { shallow } from 'enzyme';
import NumberInput from '../../common/Input';

describe('NumberInput', () => {

    it('renders without crashing', () => {
        const wrapper = shallow(<NumberInput />)
        expect(wrapper).toBeTruthy();
    });
})