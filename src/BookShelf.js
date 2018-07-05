import React from 'react'
import BookListing from './BookListing.js'
//import * as BooksAPI from './BooksAPI'
import './App.css'

class BookShelf extends React.Component {
  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading{/*REPLACE THIS WITH THE BOOKSHELF TITLE BOOK IS ON*/}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <li>
                <BookListing />
              </li>
              <li>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}></div>
                    <div className="book-shelf-changer">
                      <select>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">Enders Game</div>
                  <div className="book-authors">Orson Scott Card</div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelf;
