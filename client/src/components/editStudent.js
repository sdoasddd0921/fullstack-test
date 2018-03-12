import React from 'react';
import StuBox from './studentInfoBox';

class EditStudent extends React.Component {
  render() {
    console.table(this.props.location.state)
    const defaultDatas = this.props.location.state;
    return (
      <div>
        <h1 className="h1">Edit student</h1>
        <hr/>
        <StuBox {...defaultDatas}/>
      </div>
    );
  }
}

export default EditStudent;