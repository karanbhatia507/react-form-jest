import React from 'react';
import {  mount } from 'enzyme';
import Paragraph from '../../components/para'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() })

describe('Testing Paragraph Component', () => {
    it('Paragraph component should be defined', () => {
        const component = mount(<Paragraph text="Hey paragraph" className="para" />)
        expect(component.prop('text')).toEqual("Hey paragraph")
        expect(component.prop('className')).toEqual("para")
    })
    it('Typeof of Props', () => {
        const component = mount(<Paragraph text="Hey paragraph" className="para" />)
        expect(typeof component.prop('text')).toBe("string")
        expect(component.prop('className')).toContain('para')
    })
    it('Snapshot Component tree', () => {
        const component = mount(<Paragraph text="Hey paragraph!" className="para" />)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
    })
})