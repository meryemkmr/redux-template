import { combineReducers } from 'redux';
import authorsReducer from './authors'
import booksReducer from './books'

const rootReducers = combineReducers({
  authors: authorsReducer,
  books:booksReducer
});

export default rootReducers;
