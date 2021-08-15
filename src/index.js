import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'reset-css';
import store from './redux/store';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer';

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById("root"));

reportWebVitals();