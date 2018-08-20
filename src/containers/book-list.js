import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
//this makes sure actions flows through all reducers
import { bindActionCreators } from 'redux'

 class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    })
  }
  render() {
    
    return (
      <ul className='list group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}
//purpose of this functio is to take application state as an argument
//!!state conatins an array of books and the active book!!
function mapStateToProps(state) {
  //whatever gets returned from here will show up as props inside of BookList
  //whatever gets returned here gets set to this.props
  return {
    books: state.books
  };
}
//anything returned from this function will end up as props on the BookList container

function mapDispatchToProps(dispatch) {
  //whenever electBook is called, the result should be passed to 
  //all of our refucers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}
//connect takes a function and a component and makes a CONTAINER
//MOST CONFUSING IN REDUX
//Promote BookList from a component to a container- it needs to know
//about this new dispatch method, selectBook.  Make it available
//as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);