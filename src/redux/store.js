import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './app-reducer';

const store = createStore(appReducer, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;