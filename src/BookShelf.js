import React from 'react'
import BookListing from './BookListing.js'
import PropTypes from 'prop-types'
import './App.css'

// Covert this to a stateless component function
function BookShelf(props) {
  const { shelfName, changeBookShelf, booksOnShelf } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksOnShelf.map((book) => (
            <li key={book.id}>
              <BookListing
                book = {book}
                changeBookShelf = {changeBookShelf}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

BookShelf.propTypes = {
  shelfName: PropTypes.string.isRequired,
  changeBookShelf: PropTypes.func.isRequired,
  booksOnShelf: PropTypes.array.isRequired
}

export default BookShelf;
