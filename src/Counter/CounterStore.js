import { observable, action } from 'mobx';
// import autobind from 'autobind-decorator';

export default class CounterStore {
  @observable count = 0;

  @action
  increaseCounter() {
    this.count++;
  }

  @action
  decreaseCounter() {
    this.count--;
  }

  @action
  resetCounter() {
    this.count = 0;
  }
};
