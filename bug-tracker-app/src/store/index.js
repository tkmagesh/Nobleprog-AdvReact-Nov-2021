import { createStore } from 'redux';
import bugsReducer from '../bugs/reducers';

const store = createStore(bugsReducer);

export default store;