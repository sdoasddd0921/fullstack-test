import React from 'react';
import StuBox from './studentInfoBox';
import { connect } from 'react-redux';
import { togglePopup } from '../redux/actions';

class EditStudent extends React.Component {
  submit(data) {
    const { state={} } = this.props.location;
    const { _id } = state;
    const { openPop } = this.props;
    // console.log('new datas: ', this.props.location.state)
    fetch(
      '/api/student/' + _id,
      {
        method: 'put',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      }
    )
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          // alert(data.error);
          openPop('Something wrong happened during saving data.');
        } else {
          // alert(data.result);
          openPop('Student\'s data changed success.');
        }
      }).catch(err => {
        console.log('Update student error: ', err);
      });
  }

  render() {
    // console.table(this.props.location.state)
    const defaultDatas = this.props.location.state;
    return (
      <div>
        <h1 className="h1">Edit student</h1>
        <hr/>
        <StuBox type="Edit" {...defaultDatas} onSubmit={this.submit.bind(this)}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProops) => {
  return {
    openPop: (result) => {
      dispatch(togglePopup('open', result))
    }
  };
};

export default connect(null, mapDispatchToProps)(EditStudent);