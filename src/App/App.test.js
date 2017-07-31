import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import renderer from 'react-test-renderer';
import App from './App';
import store from '../stores';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
  	div
	);
});

it('renders a snapshot', () => {
  const tree = renderer.create(
  	<Provider store={store}>
			<App />
		</Provider>,
	).toJSON();

  expect(tree).toMatchSnapshot();
});
