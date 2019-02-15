import React from 'react';
import { mount } from 'enzyme';
import InputComponent from '../../components/inputComponent'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() })

describe('Testing InputComponent Component', () => {
    it('InputComponent component should be defined', () => {
        const component = mount(<InputComponent placeholder="Full Name" />)
        expect(component).toBeDefined()
    })
    // number of times this component is present
    it('length', () => {
        const component = mount(<InputComponent />)
        expect(component.find('Label').length).toBe(1)
    })
    // length of children
    it('Children Length', () => {
        const component = mount(<InputComponent />)
        expect(component.find('.form_group').children()).toHaveLength(3)
        expect(component.find('.label').children()).toHaveLength(1)
    })
})