import { createStore } from 'redux';
import appReducer from './appReducer';

const store = createStore(appReducer);

window.store = store;

export default store;