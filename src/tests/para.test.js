import React from 'react';
import { shallow, mount } from 'enzyme';
import Paragraph from '../components/para'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { className } from 'postcss-selector-parser';

configure({ adapter: new Adapter() })

describe('Testing Paragraph Component', () => {
    it('Paragraph component should be defined', () => {
        const component = mount(<Paragraph text="Hey paragraph" className="para" />)
        expect(component.prop('text')).toEqual("Hey paragraph")
        expect(component.prop('className')).toEqual("para")
    })
})