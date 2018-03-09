import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import '../static/popup.css';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader>Modal Title</ModalHeader>
      </Modal>
    );
  }
};

export default connect()(Popup);