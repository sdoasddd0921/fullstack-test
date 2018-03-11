import React from 'react';

class StudentList extends React.Component {
  state = { students: [] }
  componentDidMount() {
    fetch('/api/student')
      .then(res => res.json())
      .then(data => this.setState({ students: data }))
      .catch(err => console.log('get data err'));
  }

  render() {
    return (
      <table className="table table-hover table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">index</th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Sex</th>
          </tr>
        </thead>
        <tbody>
          { this.state.students.map((std, index) => (
            <tr key={index}>
              <th scope="roow">{index}</th>
              <td>{std.ID}</td>
              <td>{std.name}</td>
              <td>{std.age}</td>
              <td>{std.sex}</td>
            </tr>
          )) }
        </tbody>
      </table>
    );
  }
}

export default StudentList;
