import React, { Component } from 'react';
import Counter from '../Counter/Counter';
import Todo from '../Todo/Todo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Counter />
          <hr />
          <Todo />
        </div>
      </div>
    );
  }
}

export default App;
