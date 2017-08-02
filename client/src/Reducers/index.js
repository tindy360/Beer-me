import { combineReducers } from 'redux';
import search from './search';
import brewery from './brewery';
import logIn from './logIn';
const rootReducer = combineReducers({
  search,
  brewery,
  logIn
})

export default rootReducer;
