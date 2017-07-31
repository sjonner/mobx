import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import autobind from 'autobind-decorator';

@inject(stores => ({counterStore: stores.store.counter}))
@observer
export default class Counter extends Component {
  render() {
    return (
      <div>
        Count: {this.props.counterStore.count} times!<br />

        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }

  @autobind
  handleIncrease() {
    this.props.counterStore.increaseCounter();
  }

  @autobind
  handleDecrease() {
    this.props.counterStore.decreaseCounter();
  }

  @autobind
  handleReset() {
    this.props.counterStore.resetCounter();
  }
}
