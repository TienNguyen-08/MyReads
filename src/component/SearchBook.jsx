import React, { useEffect, useState } from 'react';
import * as BooksApi from '../service/BooksAPI';
import { useDebounce } from '../customehook/useDebounce';
import { Book } from './Book';
export const SearchBook = (props) => {
    const [resultBooks, setResultBooks] = useState([]);
    const [keySearch, setKeySearch] = useState('');

    const handleChange = (event) => {
      const newValue = event.target.value;
      setKeySearch(newValue);
    }
  
    useEffect(() => {
      const getBooks = async () => {
      let searchTerm = useDebounce(keySearch, 300);
        
        if(searchTerm) {
          try {
            if (keySearch.length > 0) {
              const books = await BooksApi.search(keySearch.trim());
              setResultBooks(books) // Update state directly (no need for conditional)
            } else {
              setResultBooks([]); // Set empty array for no results
            }
          } catch (error) {
            setResultBooks([]); // Set to null for error handling
          }
        }else {
          setResultBooks([]);
        }
      };
    
      getBooks();
    }, [keySearch]);
    
    return (
        <div className="search-books">
        <div className="search-books-bar">
          <a
            className="close-search"
            onClick={() => props.onpenSearch()}
          >
            Close
          </a>
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
              (resultBooks.length > 0 && resultBooks.map(book => 
                <Book book={book}/>
              ))
            }
          </ol>
        </div>
      </div>
    )
}
