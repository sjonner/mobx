// import UiStore from './UiStore'
import CounterStore from './Counter/CounterStore'

const createStore = () => ({
  // ui: new UiStore(),
  counter: new CounterStore(),
});

export { createStore };
export default createStore();
