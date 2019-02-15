import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
      const { fullName, email, enquiry, file, number } = this.props;
    return (
      <div>
        <Button className="submt_btn" color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <h5> Name: {fullName}</h5>
            <h5> Email: {email}</h5>
            <h5> Contact Number: {number}</h5>
            <h5> File Name: {file}</h5>
            <h5> Enquiry: {enquiry}</h5>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Correct</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Details;