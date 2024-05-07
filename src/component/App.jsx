import "../css/App.css"
import { useEffect, useState } from "react"
import { ListBook } from "./ListBook"
import { SearchBook } from "./SearchBook"
import * as BooksApi from '../service/BooksAPI';
import { Route, Routes } from "react-router-dom";

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
      if(book.shelf === 'none' && type !== 'none') {
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
        const newBooks = books.filter(item => item.id !== book.id);
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
      <Routes>
        <Route path='/search' element={<SearchBook onpenSearch={onpenSearch} onUpdateShelf={onUpdateShelf}/>}/>
        <Route exact path='/' element={<ListBook onpenSearch={onpenSearch} books={books} typeBook={typeBook} onUpdateShelf={onUpdateShelf}/>}/>
      </Routes>
    </div>
  )
}

export default App
