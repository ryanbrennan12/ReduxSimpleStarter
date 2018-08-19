import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  //key is piece of state, value is Reducer itself
  books: BooksReducer
});

export default rootReducer;
