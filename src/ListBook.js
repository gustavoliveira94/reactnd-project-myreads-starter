// Call the imports necessary
import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import BookShelf from './BookShelf'

const ListBook = ({booksList, onChangeShelf}) => {

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                {/* List the books in shelf defined */}
                    <div>
                        <BookShelf onChangeShelf={onChangeShelf} bookList={booksList.filter((book) => book.shelf === "currentlyReading")} title='Currently Reading' />
                        <BookShelf onChangeShelf={onChangeShelf} bookList={booksList.filter((book) => book.shelf === "wantToRead")} title='Want to Read' />
                        <BookShelf onChangeShelf={onChangeShelf} bookList={booksList.filter((book) => book.shelf === "read")} title='Read' />
                    </div>
                </div>
                <div className="open-search">
                    <Link
                        to="/search"
                        className="open-search"
                    />
                </div>
            </div>
        )
    }

export default ListBook