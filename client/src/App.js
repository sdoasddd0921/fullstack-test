import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import StuList from './components/showStudents';

class Myapp extends React.Component {
  render() {
    return (
      <div>
        <Link className="btn btn-primary" to="/add">Add</Link>
      </div>
    );
  }
}

class App extends React.Component {
  state = { date: '' };
  render() {
    return (
      <div className="App">
        <div>
          <Myapp />
          <hr/>
          <StuList />
        </div>
      </div>
    );
  }

  componentDidMount() {
    // fetch('/test')
    //   .then((res) => res.json())
    //   .then((date) => {
    //     this.setState(date)
    //   });
  }
}

export default App;
