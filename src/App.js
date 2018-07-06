import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks.js'
import BookShelf from './BookShelf.js'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    bookDetails: [] //This array holds an array of objects, one for each book.
  }

  // This will fetch all books from the API and store them in the bookDetails array.
  getBooks = () => {
    BooksAPI.getAll().then(bookDetails => (
    this.setState({ bookDetails })
    ))
  }

  //When the component initially loads, grab all books.
  componentDidMount() {
    this.getBooks();
  }

  //When the component changes, (when a user chaanges a select box option) re-get the books.
  componentDidUpdate() {
    this.getBooks();
  }

  //When the user changes the books shelf, update our book and API.
  changeBookShelf(book, shelf) {
    BooksAPI.update(book, shelf).then((response) => { // This updates each shelfs array of books.
      book.shelf = shelf;
      //console.log(response);
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks
            setSearchPage={() => this.setState({ showSearchPage: false })}
          />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf
                  shelfName = 'Currently Reading'
                  booksOnShelf = {this.state.bookDetails.filter((book) => book.shelf === "currentlyReading")}
                  changeBookShelf = {this.changeBookShelf}
                />
                <BookShelf
                  shelfName = 'Want to Read'
                  booksOnShelf = {this.state.bookDetails.filter((book) => book.shelf === "wantToRead")}
                  changeBookShelf = {this.changeBookShelf}
                />
                <BookShelf
                  shelfName = 'Read'
                  booksOnShelf = {this.state.bookDetails.filter((book) => book.shelf === "read")}
                  changeBookShelf = {this.changeBookShelf}
                />
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
