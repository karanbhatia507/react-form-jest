import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import * as actions from '../actions/register'
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Paragraph from './para';
import "../App.css"

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }

    _onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    _handleSubmit = () => {
        this.props.register(this.state)
    }

    render() {
        return (
            <div className="wdth_95">
            <Paragraph text="Fillup your details" class="para" />
                <Form>
                    <FormGroup>
                        <Label for="exampleName">Name</Label>
                        <Input type="text" name="fullName" id="exampleName" onChange={this._onChange} placeholder="Steve Rogers" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" onChange={this._onChange} placeholder="abc@gmail.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" onChange={this._onChange} placeholder="password" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleNumber">Mobile</Label>
                        <Input type="number" name="number" id="exampleNumber" onChange={this._onChange} placeholder="Mobile" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Occupation</Label>
                        <Input type="select" name="select" onClick={this._onChange} id="exampleSelect">
                            <option>Business</option>
                            <option>Job</option>
                            <option>Student</option>
                            <option>Others</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Enquiry</Label>
                        <Input type="textarea" name="enquiry" onChange={this._onChange} id="exampleText" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input type="file" name="file" id="exampleFile" onChange={this._onChange} />
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />{' '}
                            Check me out
                        </Label>
                    </FormGroup>
                    <Button onClick={this._handleSubmit}>Submit</Button>
                </Form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      registerDetails: state.registerUser
    }
  }
  
  function mapDispatchToProps(dispatch) {
      return bindActionCreators(actions, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);