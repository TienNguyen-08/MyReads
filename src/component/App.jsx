import "../css/App.css"
import { useState } from "react"
import { ListBook } from "./ListBook"
function App() {
  const [showSearchPage, setShowSearchpage] = useState(false)

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      )
: (
        <ListBook/>
      )}
    </div>
  )
}

export default App
