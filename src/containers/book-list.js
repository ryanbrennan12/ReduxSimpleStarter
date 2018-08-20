import React, { Component } from 'react';
import { connect } from 'react-redux';

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
//connect takes a function and a component and makes a CONTAINER

export default connect(mapStateToProps)(BookList);