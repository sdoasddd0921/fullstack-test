import React from 'react';
import StuBox from './studentInfoBox';

class EditStudent extends React.Component {
  submit(data) {
    const { state={} } = this.props.location;
    const { _id } = state;
    console.log('new datas: ', this.props.location.state)
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
          alert(data.error);
        } else {
          alert(data.result);
        }
      }).catch(err => {
        console.log('Update student error: ', err);
      });
  }

  render() {
    console.table(this.props.location.state)
    const defaultDatas = this.props.location.state;
    return (
      <div>
        <h1 className="h1">Edit student</h1>
        <hr/>
        <StuBox {...defaultDatas} onSubmit={this.submit.bind(this)}/>
      </div>
    );
  }
}

export default EditStudent;