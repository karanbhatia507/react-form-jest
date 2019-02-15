import React from 'react';
import { mount } from 'enzyme';
import Details from '../../components/details'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import Modal from "../../components/details";
import Button from "../../components/details";

configure({ adapter: new Adapter() })

describe('Testing Details Component', () => {
   
    it('Details component is defined', () => {
    const component = mount(<Details />)
    expect(component).toBeDefined()
   })

   it('Contains information about user', () => {
    const component = mount(<Details name="Karan" contact="98995XXXXX"/>)
    const tree = toJson(component)
    expect(component.prop('name')).toContain("Karan")
    expect(typeof component.prop('contact')).toBe("string")
    expect(tree).toMatchSnapshot()
   })

//    it('handleChange works as expected', () => {
//     const component = mount(<Details handleChange={() => {}} />)
//     component.find("input").simulate("change", {
//         target: { value: "hello" }
//     });
//     expect(component.find("input").props().value).toEqual("hello");
//    });

   it('has props greater than 3', () => {
    const component = mount(<Details name="Karan" contact="98995XXXXX" email="abc@gmail.com" enquiry="hey whats up people...?" />)
    expect(component.prop('name').length).toBeGreaterThan(3); 
    expect(component.find(Button).children()).toHaveLength(1) 
    expect(component.find(Modal).children()).toHaveLength(1)
    expect(component.prop('name')).toMatch(/ran/)
    expect(component.prop('name')).not.toMatch(/rak/)
   })
})