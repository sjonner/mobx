// import UiStore from './UiStore'
import { observable, autorunAsync } from 'mobx';
import CounterStore from './Counter/CounterStore';
import { merge, cloneDeep } from 'lodash';

const createStore = () => storedObservable('mobx-stores', {
  // ui: new UiStore(),
  counter: new CounterStore(),
}, 200);

export { createStore };
export default createStore();

function storedObservable(key, defaultValue, debounce) {
  const initialState = localStorage.getItem(key);
  const hydrated = cloneDeep(defaultValue);

  if (initialState) {
    merge(hydrated, JSON.parse(initialState));
  }

  const hydratedObservable = observable(hydrated);

  autorunAsync(() => {
    localStorage.setItem(key, JSON.stringify(hydratedObservable));
  }, debounce);

  return hydratedObservable;
}