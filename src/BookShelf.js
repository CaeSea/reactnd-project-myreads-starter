import React from 'react'
import BookListing from './BookListing.js'
//import * as BooksAPI from './BooksAPI'
import './App.css'

// Covert this to a stateless component function
class BookShelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.booksOnShelf.map((book) => (
              <li key={book.id}>
                <BookListing
                  book = {book}
                />
                {/* Need to add a BookListing for every book on this shelf */}
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;
