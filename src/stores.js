import { useStrict } from 'mobx';
// import UiStore from './UiStore'
import CounterStore from './Counter/CounterStore';
import TodoStore from './Todo/TodoStore';

useStrict(true);

const createStore = () => ({
  // ui: new UiStore(),
  counter: new CounterStore(),
  todo: new TodoStore(),
});

export { createStore };
export default createStore();
