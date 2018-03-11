import React from 'react';

class StudentList extends React.Component {
  componentDidMount() {
    fetch('/api/student')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log('get data err'));
  }

  render() {
    return (
      <div>
        this is a List to show students.
      </div>
    );
  }
}

export default StudentList;
