import storedObservable from './storedObservable';
// import UiStore from './UiStore'
import CounterStore from './Counter/CounterStore';

const createStore = () => storedObservable('mobx-stores', {
  // ui: new UiStore(),
  counter: new CounterStore(),
}, 200);

export { createStore };
export default createStore();
