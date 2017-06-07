import { combineReducers } from 'redux';
import saved from './saved';
import search from './search';

const rootReducer = combineReducers({
  saved,
  search,
})

export default rootReducer;
