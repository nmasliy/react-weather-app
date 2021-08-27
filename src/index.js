import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'reset-css';
import store from './redux/store';
import { Provider } from 'react-redux';
import App from './App';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root"));

reportWebVitals();