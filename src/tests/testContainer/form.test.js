import React from 'react';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import configureStore from "redux-mock-store"
import { RegistrationForm } from "../../container/form";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

configure({ adapter: new Adapter() })

describe('Testing Paragraph Component', () => {
    const initialState = {userInfo : ""}
    const mockStore = configureStore()
    let store
    
    beforeEach(() => {
        store = mockStore(initialState)
    })

    it("RegistrationForm is defined", () => {
        const mockLoginfn = jest.fn()
        const component = shallow(<Router><RegistrationForm store={store} /></Router>)
        expect(component).toBeDefined()
    })
    // it("InputComponent", () => {
    //     const mockLoginfn = jest.fn()
    //     const component = shallow(<Router><RegistrationForm store={store} /></Router>)
    //     expect(component.find('InputComponent').length).toBe(0)
    // })
    // it("InputComponent", () => {
    //     const mockLoginfn = jest.fn()
    //     const component = shallow(<Router><RegistrationForm store={store} /></Router>)
    //     expect(component.find('.wdth_95').children()).toHaveLength(1)
    // })
})