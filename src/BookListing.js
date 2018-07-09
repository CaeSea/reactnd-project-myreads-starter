import React from 'react'
//import * as BooksAPI from './BooksAPI'
import './App.css'

// Covert this to a stateless component function
function BookListing(props) {
  return (
   <div className="book">
     <div className="book-top">
       <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${props.book.imageLinks?props.book.imageLinks.thumbnail:`http://via.placeholder.com/128x193?text=No%20Cover`}")`}}></div>
       <div className="book-shelf-changer">
         <select value={props.book.shelf ? props.book.shelf : 'none'} onChange={(e) => props.changeBookShelf(props.book, e.target.value, props.bookDetails)}>
           <option value="move" disabled>Move to...</option>
           <option value="currentlyReading">Currently Reading</option>
           <option value="wantToRead">Want to Read</option>
           <option value="read">Read</option>
           <option value="none">None</option>
         </select>
       </div>
     </div>
     <div className="book-title">{props.book.title}</div>
     <div className="book-authors">{props.book.authors}</div>
   </div>
  )
}

export default BookListing;
