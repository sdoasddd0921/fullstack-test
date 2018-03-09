import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import '../static/popup.css';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.show
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Modal Title</ModalHeader>
      </Modal>
    );
  }
};

let a = 0;
const mapStateToProps = (state) => {
  console.log('mstp:', a++)
  return {
    show: state.showPopup
  };
};

export default connect(mapStateToProps)(Popup);