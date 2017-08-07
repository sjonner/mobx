import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import store from './stores';
import storedObservable from './storedObservable';

ReactDOM.render(
	<Provider store={storedObservable('mobx-stores', store, 200)}>
		<App>
			{process.env.NODE_ENV !== 'production' &&
				<DevTools position={{bottom: 0}} />
			}
		</App>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
