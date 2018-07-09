import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookListing from './BookListing.js'
import './App.css'

class SearchBooks extends React.Component {
  state = {
    query: '',
    queryResults: [],
    searched: false
  }

  //This uses the BooksAPI search method to search the API for books based on a user given query.
  updateQuery = (query) => {
    this.setState({ searched : true })
    this.setState({query})

    BooksAPI.search(query).then((results) => {
      const trueResults = Array.isArray(results)
      if(trueResults) {
        // This filters the search results against the bookDetails array and changes to shelf to the right shelf.
        results.map(book => (this.props.bookDetails.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
        this.setState({ queryResults: results })
      } else {
        this.setState({ queryResults: []})
      }
    })
  }

  render () {
    const { bookDetails, changeBookShelf } = this.props;
    const { query, queryResults, searched } = this.state;
    const { updateQuery } = this;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
            >Close
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={query} onChange={e => updateQuery(e.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searched && queryResults.length === 0 ? (
              <p>No Results</p>
              ) : (
                queryResults.map((book) => (
                  <li key={book.id}>
                    <BookListing
                      book = {book}
                      changeBookShelf = {changeBookShelf}
                    />
                  </li>
              )))
            }
          </ol>
        </div>
      </div>
    )
  }

  static propTypes = {
    bookDetails: PropTypes.array.isRequired,
    changeBookShelf: PropTypes.func.isRequired
  }

}

export default SearchBooks;
