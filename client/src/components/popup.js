import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { togglePopup } from "../redux/actions";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
    const { dispatch, show } = this.props;
    dispatch(togglePopup(!show))
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ modal: nextProps.show})
  }

  render() {
    const { show, result } = this.props;
    return (
      <Modal isOpen={show} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Result:</ModalHeader>
        <ModalBody>{ result }</ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={this.toggle}>OK</button>
        </ModalFooter>
      </Modal>
    );
  }
};

const mapStateToProps = ({popup}) => {
  return { ...popup };
};

export default connect(mapStateToProps)(Popup);