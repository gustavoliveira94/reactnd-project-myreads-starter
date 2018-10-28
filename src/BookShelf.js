// Call the imports necessary
import React from 'react'
import './App.css'
import Book from './Book'


class BookShelf extends React.Component {
    render() {

        const { bookList, title, onChangeShelf } = this.props

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {/* Define books in Shelf */}
                        {bookList.map((book) => (
                            <li key={book.id}>
                                <Book book={book} onChangeShelf={onChangeShelf} shelf={book.shelf} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }

}

export default BookShelf