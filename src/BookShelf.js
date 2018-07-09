import React from 'react'
import BookListing from './BookListing.js'
//import * as BooksAPI from './BooksAPI'
import './App.css'

// Covert this to a stateless component function
function BookShelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.booksOnShelf.map((book) => (
            <li key={book.id}>
              <BookListing
                book = {book}
                changeBookShelf = {props.changeBookShelf}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf;
