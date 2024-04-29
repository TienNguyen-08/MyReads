import "../css/App.css"
import { useEffect, useState } from "react"
import { ListBook } from "./ListBook"
import { SearchBook } from "./SearchBook"
import * as BooksApi from '../service/BooksAPI';

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);
  const onpenSearch = () => {
    setShowSearchpage(!showSearchPage);
  }

  useEffect( async () => {
    let res = await BooksApi.getAll();
    setBooks(res);
  }, []);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBook onpenSearch={onpenSearch}/>
      )
: (
        <ListBook onpenSearch={onpenSearch} books={books}/>
      )}
    </div>
  )
}

export default App
