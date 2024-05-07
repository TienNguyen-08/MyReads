import "../css/App.css"
import { useEffect, useState } from "react"
import { ListBook } from "./ListBook"
import { SearchBook } from "./SearchBook"
import * as BooksApi from '../service/BooksAPI';

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);
  const [typeBook,] = useState([
    {key: "currentlyReading", value: "Currently Reading"},
    {key: "wantToRead", value: "Want To Read"},
    {key: "read", value: "Read"}
  ]);
  const onpenSearch = () => {
    setShowSearchpage(!showSearchPage);
  }

  const onUpdateShelf = (book, type) => {
    BooksApi.update(book, type).then(listBook => {
      if(book.shelf === 'none' && shelf !== 'none') {
        setBooks([...books, book]);
      }

      const updateBooks = books.map(item => {
        if(item.id === book.id) {
          item.shelf = type;
        }

        return item;
      });

      setBooks([...books, updateBooks]);

      if(type === 'none') {
        const newBooks = books.filter(deleteBook => deleteBook.id !== book.id);
        setBooks([...books, newBooks]);
      }
    })
  }

  useEffect( async()=> {
    let res = await BooksApi.getAll();
    setBooks(res);
  }, []);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBook onpenSearch={onpenSearch} onUpdateShelf={onUpdateShelf}/>
      )
: (
        <ListBook onpenSearch={onpenSearch} books={books} typeBook={typeBook} onUpdateShelf={onUpdateShelf}/>
      )}
    </div>
  )
}

export default App
