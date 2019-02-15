import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const InputComponent = (props) => {
    const { labelFor, label, type, name, id, handleChange, placeholder } = props;
    return (
        <FormGroup className="form_group">
            <Label className="label" for={labelFor}>{label}</Label>
            <Input type={type} name={name} id={id} onChange={handleChange} placeholder={placeholder} />
        </FormGroup>
    )
}

export default InputComponent;