import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookListing from './BookListing.js'
import './App.css'
//import sortBy from 'sort-by'
//import escapeRegExp from 'escape-string-regexp'

class SearchBooks extends React.Component {

  state = {
    query: '',
    queryResults: [],
    searched: false
  }

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
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.props.setSearchPage()}>Close</a>
          <div className="search-books-input-wrapper">
            {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={e => this.updateQuery(e.target.value)}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searched && this.state.queryResults.length === 0 ? (
              <p>No Results</p>
              ) : (
                this.state.queryResults.map((book) => (
                  <li key={book.id}>
                    <BookListing
                      book = {book}
                      changeBookShelf = {this.props.changeBookShelf}
                    />
                  </li>
              )))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks;
