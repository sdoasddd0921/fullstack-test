import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { togglePopup } from "../redux/actions";
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
    const { dispatch, show } = this.props;
    dispatch(togglePopup(!show))
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ modal: nextProps.show})
  }

  render() {
    const { show } = this.props;
    return (
      <Modal isOpen={show} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Modal Title</ModalHeader>
      </Modal>
    );
  }
};

const mapStateToProps = ({popup:{show}}) => {
  return {
    show
  };
};

export default connect(mapStateToProps)(Popup);