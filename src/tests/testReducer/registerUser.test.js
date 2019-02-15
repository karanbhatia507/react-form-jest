import React from 'react';
import { shallow, mount } from 'enzyme';
import registerUser from '../../reducers/registerUser'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() })

describe('Testing Register reducer', () => {
    it('Has an empty state', () => {
        let action = {
            type: "REGISTER_USER",
            payload: ""
        }
        expect(registerUser(undefined, action)).toEqual("")
    })
    it('State updates', () => {
        let action = {
            type: "REGISTER_USER",
            payload: {
                email: "karanbhatia507@gmail.com",
                enquiry: "heyyyyyyyyyy",
                fullName: "Karan Bhatia"
            }
        }
        expect(registerUser(undefined, action)).toEqual({
            "email": "karanbhatia507@gmail.com",
            "enquiry": "heyyyyyyyyyy",
            "fullName": "Karan Bhatia"
        })
    })
})