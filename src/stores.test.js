import store from './stores';
import CounterStore from './Counter/CounterStore';

describe('stores container', () => {
  it('has a CounterStore', () => {
    expect(store.counter).toBeInstanceOf(CounterStore);
  });

  describe('instances', () => {
    it('exports a singleton as default', async () => {
      const { default: store2 } = await import('./stores');

      store2.counter.increaseCounter();
      store.counter.increaseCounter();

      expect(store).toBe(store2);
      expect(store.counter.count).toBe(2);
      expect(store.counter.count).toBe(store2.counter.count);
    });

    it('can create a new instance', async () => {
      const { createStore } = await import('./stores');
      const store2 = createStore();

      // https://mobx.js.org/best/pitfalls.html#declaring-proptypes-might-cause-unnecessary-renders-in-dev-mode
      store2.counter.resetCounter();
      store.counter.resetCounter();

      expect(store).not.toBe(store2);
      expect(store).toEqual(store2);
    });
  });
});
