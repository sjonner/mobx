import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Counter from './Counter';
import store from '../stores';

beforeEach(() => {
	store.counter.resetCounter();
});

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
		<Counter.wrappedComponent counterStore={store.counter} />,
  	div
	);
});

it('renders a snapshot', () => {
  const tree = renderer.create(
  	<Counter.wrappedComponent counterStore={store.counter} />
	).toJSON();

  expect(tree).toMatchSnapshot();
});
