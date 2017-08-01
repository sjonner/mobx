import { observable, action } from 'mobx';

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
