import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios';
import axios from 'axios';
import index from './Reducers/';

const store = createStore(
  index,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(axiosMiddleware(axios), thunk)
);

export default store;
