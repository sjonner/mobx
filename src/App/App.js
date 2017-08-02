import React, { Component } from 'react';
import Todo from '../Todo/Todo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  counterModule = null;

  render() {
    console.log('render');
    return (
      <div className="App">
        {this.props.children}

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className="App-intro">
          <Todo />

          <div style={{margin: 40}}>
            {this.counterModule
              ? this.counterModule
              : <button onClick={this.loadCounterModule.bind(this)}>load Counter module async</button>
            }
          </div>
        </div>
      </div>
    );
  }

  async loadCounterModule() {
    const { default: Counter } = await import('../Counter/Counter');
    this.counterModule = <Counter />;
    this.forceUpdate();
  }
}

export default App;
