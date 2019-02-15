import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import * as actions from '../actions/register'
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Paragraph from '../components/para';
import "../App.css"
import InputComponent from '../components/inputComponent'
import Details from '../components/details'

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submit: false
        }
    }

    _onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    _handleSubmit = () => {
        this.props.register(this.state)
        this.setState({ submit: true })
        // return <Details />
    }

    render() {
        return (
            <div className="wdth_95">
            <Paragraph text="Fillup your details" class="para" />
                <Form>
                    <InputComponent labelFor="exampleName" label="Name" type="text" name="fullName" id="exampleName" placeholder="Steve Rogers" handleChange={this._onChange} />
                    <InputComponent labelFor="exampleEmail" label="Email" type="email" name="email" id="exampleEmail" placeholder="abc@gmail.com" handleChange={this._onChange} />
                    <InputComponent labelFor="examplePassword" label="Password" type="password" name="password" id="examplePassword" placeholder="password" handleChange={this._onChange} />
                    <InputComponent labelFor="exampleNumber" label="Mobile" type="number" name="number" id="exampleNumber" placeholder="Mobile" handleChange={this._onChange} />
                    <FormGroup>
                        <Label for="exampleSelect">Occupation</Label>
                        <Input type="select" name="select" onClick={this._onChange} id="exampleSelect">
                            <option>Business</option>
                            <option>Job</option>
                            <option>Student</option>
                            <option>Others</option>
                        </Input>
                    </FormGroup>
                    <InputComponent labelFor="exampleText" label="Enquiry" type="textarea" name="enquiry" id="exampleNumber" placeholder="exampleText" handleChange={this._onChange} />
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
                    <Button className="submt_btn" onClick={this._handleSubmit}>Submit</Button>
                </Form>
                <Details buttonLabel="Show Details" {...this.state} />
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