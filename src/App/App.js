import React, { Component } from 'react';
import Todo from '../Todo/Todo';
import './App.css';

class App extends Component {
  counterModule = null;

  render() {
    return (
      <div className="App">
        {this.props.children}

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
