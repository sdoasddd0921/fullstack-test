import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Button,
  InputGroup, InputGroupAddon, InputGroupText, Input
} from 'reactstrap';
import styled from 'styled-components';
import Infobox from './components/infoBox';

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

const Inp = ({name, type}) => (
  <div className="input-group mb-2">
    <div className="input-group-prepend">
      <label htmlFor={name} className="input-group-text">{name}</label>
    </div>
    <input type={type || 'text'} className="form-control" name={name} id={name}/>
  </div>
);

class Myapp extends Component {
  submit(e) {
    e.preventDefault();
    const databody = new FormData(e.target);
    const data = {};
    for (const [key, value] of databody)
      data[key] = value;
    console.log('data:', data);
    fetch('/add', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(data)
    })
      .then((res) => {
        console.log(res);
      });
  }

  render() {
    return (
      <div>
        <h2>My App:</h2>
        <hr />
        <Myappwindow>
          <form method="post" onSubmit={this.submit.bind(this)}>
            <Inp name='name'/>
            <Inp name='age' type='number'/>
            <Inp name='sex'/>
            <button type="submit" className="btn btn-primary">Add</button>
          </form>
        </Myappwindow>
        <Infobox></Infobox>
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
        <div>
          <Myapp />
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
