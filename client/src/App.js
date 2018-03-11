import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import {
  Button,
  InputGroup, InputGroupAddon, InputGroupText, Input
} from 'reactstrap';
import styled from 'styled-components';
import StuList from './components/showStudents';

const Myappwindow = styled.div`
  width: 30%;
  margin: auto;
  label {
    width: 66px;
    text-align: center;
  }
  form {
    border: 1px solid #ddd;
    padding: 2em 2em 1em;
    border-radius: 5px;
  }
`;


class Myapp extends Component {
  render() {
    return (
      <div>
        <Link className="btn btn-primary" to="/add">Add</Link>
      </div>
    );
  }
}

class App extends Component {
  state = { date: '' };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>date: { this.state.date }.</p>
        <Button>Button</Button>
        <hr/>
        <div>
          <Myapp />
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
