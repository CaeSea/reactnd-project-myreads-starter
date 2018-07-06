import React from 'react'
//import * as BooksAPI from './BooksAPI'
import './App.css'

// Covert this to a stateless component function
class BookListing extends React.Component {

  //Get the books and swap out book data below for dynamic data

  render() {
    return (
     <div className="book">
       <div className="book-top">
         <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}></div>
         <div className="book-shelf-changer">
           <select value={this.props.book.shelf ? this.props.book.shelf : 'none'} onChange={(e) => this.props.changeBookShelf(this.props.book, e.target.value)}>
             <option value="move" disabled>Move to...</option>
             <option value="currentlyReading">Currently Reading</option>
             <option value="wantToRead">Want to Read</option>
             <option value="read">Read</option>
             <option value="none">None</option>
           </select>
         </div>
       </div>
       <div className="book-title">{this.props.book.title}</div>
       <div className="book-authors">{this.props.book.authors}</div>
     </div>
    )
  }
}

export default BookListing;
