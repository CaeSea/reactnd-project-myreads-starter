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
  componentDidMount() {
    BooksAPI.getAll().then((bookDetails) => {
      this.setState({ bookDetails })
      console.log(this.state.bookDetails)
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
                />
                <BookShelf
                  shelfName = 'Want to Read'
                  booksOnShelf = {this.state.bookDetails.filter((book) => book.shelf === "wantToRead")}
                />
                <BookShelf
                  shelfName = 'Read'
                  booksOnShelf = {this.state.bookDetails.filter((book) => book.shelf === "read")}
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
