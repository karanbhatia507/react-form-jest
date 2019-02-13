import React from 'react';
import { shallow } from 'enzyme';
import RegistrationForm from '../components/form'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Provider from 'react-redux'
import configureStore from '../../src/store/configureStore';

const store = configureStore();

configure({ adapter: new Adapter() })

describe('Register form', () => {
    it('RegisterForm component should be defined', () => {
        expect(RegistrationForm).toBeDefined() 
    })
    it('RegisterForm component should render as expected', () => {
    const component = shallow(<Provider store={store}><RegistrationForm /></Provider>)
    console.log(component);
    })
})