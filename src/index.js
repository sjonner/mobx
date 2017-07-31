import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import store from './stores';

ReactDOM.render(
	<Provider store={store}>
		<App>
			<DevTools position={{bottom: 0}} />
		</App>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
