import CounterStore from './CounterStore';

describe('CounterStore instance', () => {
  const store = new CounterStore();

  it('has default count of 0', () => {
    expect(store.count).toEqual(0);
  });

  it('can increase count', () => {
    store.increaseCounter();
    expect(store.count).toEqual(1);
  });

  it('can reset count to 0', () => {
    store.resetCounter();
    expect(store.count).toEqual(0);
  });

  it('can decrease count', () => {
    store.decreaseCounter();
    expect(store.count).toEqual(-1);
  });
});
