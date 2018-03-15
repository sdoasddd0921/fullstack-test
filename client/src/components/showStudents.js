import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { togglePopup } from '../redux/actions';

class StudentList extends React.Component {
  state = { students: [] }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('/api/student')
      .then(res => res.json())
      .then(data => this.setState({ students: data }))
      .catch(err => alert('get data err'));
  }

  deleteStudent(id) {
    const { openPopup } = this.props;
    fetch('/api/student/' + id, {
      method: 'DELETE',
      body: JSON.stringify({id: id}),
      headers: new Headers({
        "Accept": "application/json",
        "Content-type": "application/json"
      })
    }).then(res => res.json())
      .then(message => {
        openPopup(message.result);
        this.fetchData();
      })
      .catch(err => {
        console.log('delete student err: ', err);
        openPopup('Delete student err: ', err.message);
      });
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
            <th scope="col">Option</th>
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
              <td>
                <Link className="btn btn-primary"
                      to={{
                        pathname: '/edit/' + std._id,
                        state: std
                      }}
                >edit</Link>
                <button className="btn btn-danger ml-2"
                        onClick={this.deleteStudent.bind(this, std._id)}
                >delete</button>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openPopup: (result, err=false) => dispatch(togglePopup('open', result, err))
  };
};

export default connect(null, mapDispatchToProps)(StudentList);
