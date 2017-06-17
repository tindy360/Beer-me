import { combineReducers } from 'redux';
import search from './search';
import list from './list';
import brewery from './brewery';

const rootReducer = combineReducers({
  search,
  list,
  brewery
})

export default rootReducer;
