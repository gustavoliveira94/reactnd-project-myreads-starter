// Call the imports necessary
import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book'
import { DebounceInput } from 'react-debounce-input';

class SearchBook extends React.Component {

    // Look query length is > 1
    updateQuery = (event) => {
        const onUpdateSearch = this.props
        const query = event
        if (query.length > 1) {
            onUpdateSearch(query)
        }
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <div time="100" handler="onChange">
                            <DebounceInput minLength={2}
                                debounceTimeout={300}
                                type="text"
                                placeholder="Search by title or author"
                                onChange={(event) => this.updateQuery(event.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {/* Call books found */}
                        {this.props.searchList.map(book => (
                            <li key={book.id}>
                                <Book
                                    book={book}
                                    onChangeShelf={this.props.onUpdateBooks}
                                    shelf={
                                        this.props.bookList.some(b => { return b.id === book.id }) ? this.props.bookList.find(b => { return b.id === book.id }).shelf : 'none'
                                    }
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBook