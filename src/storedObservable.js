import { observable, autorunAsync } from 'mobx';
import { merge, cloneDeep } from 'lodash';

export default function storedObservable(key, defaultValue, debounce) {
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