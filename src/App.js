import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks.js'
import BookShelf from './BookShelf.js'
import './App.css'

class BooksApp extends React.Component {
  state = {
    bookDetails: [] //This array holds an array of objects, one for each book that is on a shelf.
  }

  // This will fetch all books from the API and store them in the bookDetails array.
  getBooks = () => {
    BooksAPI.getAll().then(bookDetails => (
    this.setState({ bookDetails })
    ))
    //console.log(this.state.bookDetails)
  }

  //When the component initially loads, grab all books.
  componentDidMount() {
    this.getBooks();
  }

  //When the component changes, (when a user changes a select box option) re-get the books.
  componentDidUpdate() {
    this.getBooks();
  }

  //When the user changes the books shelf, update our book and API.
  changeBookShelf(book, shelf) {
    BooksAPI.update(book, shelf).then((response) => { // This updates each shelves array of books.
      book.shelf = shelf;
    })
  }

  render() {
    const { bookDetails } = this.state;
    const { changeBookShelf } = this;
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf
                  shelfName = 'Currently Reading'
                  booksOnShelf = {bookDetails.filter((book) => book.shelf === "currentlyReading")}
                  changeBookShelf = {changeBookShelf}
                />
                <BookShelf
                  shelfName = 'Want to Read'
                  booksOnShelf = {bookDetails.filter((book) => book.shelf === "wantToRead")}
                  changeBookShelf = {changeBookShelf}
                />
                <BookShelf
                  shelfName = 'Read'
                  booksOnShelf = {bookDetails.filter((book) => book.shelf === "read")}
                  changeBookShelf = {changeBookShelf}
                />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks
            setSearchPage={() => this.setState({ showSearchPage: false })}
            changeBookShelf = {changeBookShelf}
            bookDetails = {bookDetails}
          />
        )}/>
      </div>
    )
  }

  static propTypes = {
    bookDetails: PropTypes.array.isRequired,
    changeBookShelf: PropTypes.func.isRequired
  }

}

export default BooksApp
