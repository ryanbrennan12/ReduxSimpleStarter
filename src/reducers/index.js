import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

//inporting books reducer to root 
//this is the mapping of our state right here
const rootReducer = combineReducers({
  //key is piece of state, value is Reducer itself
  //line 8 gives us 'books: [{title: 'Harry Potter}, {title: 'Javascript'}]
  books: BooksReducer
});

export default rootReducer;
