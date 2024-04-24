import "../css/App.css"
import { useState } from "react"
import { ListBook } from "./ListBook"
import { SearchBook } from "./SearchBook"
function App() {
  const [showSearchPage, setShowSearchpage] = useState(false)
  const onpenSearch = () => {
    setShowSearchpage(!showSearchPage);
  }
  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBook onpenSearch={onpenSearch}/>
      )
: (
        <ListBook onpenSearch={onpenSearch}/>
      )}
    </div>
  )
}

export default App
