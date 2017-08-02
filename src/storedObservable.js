import { isObservableMap, observable, autorunAsync, extendObservable } from 'mobx';
import { mergeWith } from 'lodash';

export default function storedObservable(key, defaultValue, debounce) {
  const initialState = localStorage.getItem(key);
  const hydrated = extendObservable(observable({}), defaultValue);

  if (initialState) {
    mergeWith(hydrated, JSON.parse(initialState), checkObservables);
  }

  autorunAsync(() => {
    localStorage.setItem(key, JSON.stringify(hydrated));
  }, debounce);

  return hydrated;
}

function checkObservables(objValue, srcValue, key) {
  if (isObservableMap(objValue)) {
    return objValue.merge(srcValue);
  }
}
