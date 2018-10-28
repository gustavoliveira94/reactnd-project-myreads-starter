import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBook from './ListBook'
import SearchBook from './SearchBook'

class BooksApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      booksList: [],
      searchList: [],
    }
  }

  //Call the books
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        booksList: books
      })
    })
  }

  // Change the Shelf
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(result => {
      this.setState({
        booksList: this.state.booksList.map(b => b.id === book.id ? Object.assign({}, b, { shelf: shelf }) : b)
      })
    })
  }

  // Update Search
  updateSearch = (query) => {
    let searchList = []
    BooksAPI.search(query, 20).then(res => {
      if (res.error) {
        searchList = []
      } else {
        searchList = res
      }
      this.setState({
        searchList
      })
    })
  }

  // Update Books
  updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(result => {
      let booksList = this.state.booksList
      const found = booksList.some(b => {
        return book.id === b.id
      })
      if (!found) {
        booksList.push(Object.assign({}, book, { shelf: shelf }))
      } else {
        booksList = booksList.map(b => b.id === book.id ? Object.assign({}, b, { shelf: shelf }) : b.image.thumbnail)
      }
      this.setState({
        booksList
      })
    })
  }

  render() {
    const { booksList, searchList } = this.state;
    return (
      <div className="app">
        {/* Add Route */}
        <Route exact path="/" component={() => (
          <ListBook onChangeShelf={this.changeShelf} booksList={booksList} />
        )} />
        {/* Render the search */}
        <Route exact path="/search" render={() => (
          <SearchBook bookList={booksList} searchList={searchList} onUpdateSearch={this.updateSearch} onUpdateBooks={this.updateBooks} />
        )} />
      </div>
    )
  }
}

export default BooksApp
