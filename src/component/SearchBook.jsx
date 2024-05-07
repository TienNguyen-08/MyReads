import React, { useEffect, useState } from 'react';
import * as BooksApi from '../service/BooksAPI';
import { useDebounce } from '../customehook/useDebounce';
import { Book } from './Book';
import { Link } from 'react-router-dom';
export const SearchBook = ({onpenSearch, onUpdateShelf}) => {
    const [resultBooks, setResultBooks] = useState([]);
    const [keySearch, setKeySearch] = useState('');
    const searchTerm = useDebounce(keySearch, 200);
    let timeoutId = null;

    const resetKeySearch = () => {
      setKeySearch('');
      setResultBooks([]);
    }

    const handleChange = (event) => {
      const newValue = event.target.value;
      setKeySearch(newValue);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  
    useEffect(() => {
      const getBooks = () => {
        if(searchTerm) {
          try {
              timeoutId = setTimeout( async()=> {
                const books = await BooksApi.search(keySearch.trim());
              setResultBooks(books) // Update state directly (no need for conditional)
              }, 800);
          } catch (error) {
            setResultBooks([]); // Set to null for error handling
          }
        }else {
          setResultBooks([]);
        }
      };
    
      getBooks();
    }, [searchTerm]);
    
    return (
        <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className='close-search' onClick={resetKeySearch}/>
        
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={keySearch}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              ((resultBooks.length > 0)  && resultBooks.map(book => 
                <Book key={book.id} book={book} onUpdateShelf={onUpdateShelf}/>
              ))
            }
          </ol>
        </div>
      </div>
    )
}
