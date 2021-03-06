import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { togglePopup } from "../redux/actions";
import { withRouter } from 'react-router-dom';
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

  toggle(e) {
    const { dispatch, show, to, history } = this.props;
    dispatch(togglePopup(!show));
    console.log(e)
    if (e === undefined || e.target.id === 'OK') {
      history.push(to || '/');
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ modal: nextProps.show})
  }

  render() {
    const { show, result, err } = this.props;
    return (
      <Modal isOpen={show} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>{err?'Warning:':'Result:'}</ModalHeader>
        <ModalBody style={{color:err?'red':'#1afa29'}}>{ result }</ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" id="OK" onClick={this.toggle}>OK</button>
        </ModalFooter>
      </Modal>
    );
  }
};

const mapStateToProps = ({popup}) => {
  return { ...popup };
};

export default withRouter(connect(mapStateToProps)(Popup));