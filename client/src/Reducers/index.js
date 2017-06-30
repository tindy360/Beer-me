import { combineReducers } from 'redux';
import search from './search';
import brewery from './brewery';

const rootReducer = combineReducers({
  search,
  brewery
})

export default rootReducer;
