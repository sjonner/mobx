import { useStrict } from 'mobx';
// import UiStore from './UiStore'
import CounterStore from './Counter/CounterStore';

useStrict(true);
  // ui: new UiStore(),
  counter: new CounterStore(),

export { createStore };
export default createStore();
