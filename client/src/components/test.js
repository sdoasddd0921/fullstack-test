import React from 'react';
import FormTest from './formtest';
import AddStudent from './studentInfoBox';

class Test extends React.Component {
  client(type) {
    fetch('/api/test', {
      method: type
    }).then(res=>res.json())
      .then(data=>console.log(data));
  }

  addStudent(data) {
    console.log('student to be add: ', data);
  }

  render() {
    return (
      <div>
        <h2>Test to express:</h2>
        <hr/>
        <div className="container">
          <button className="btn btn-primary mr-2" onClick={this.client.bind(this, 'GET')}>
            GET
          </button>
          <button className="btn btn-primary mr-2" onClick={this.client.bind(this, 'POST')}>
            POST
          </button>
          <button className="btn btn-primary mr-2" onClick={this.client.bind(this, 'PUT')}>
            PUT
          </button>
          <button className="btn btn-primary mr-2" onClick={this.client.bind(this, 'DELETE')}>
            DELETE
          </button>
        </div>
        <hr/>
        <div className="container">
          <FormTest onSubmit={(data)=>console.log('submit!!!',data)} />
        </div>
        <hr/>
        <div className="container">
          <AddStudent onSubmit={this.addStudent}/>
        </div>
      </div>
    );
  }
}

export default Test;