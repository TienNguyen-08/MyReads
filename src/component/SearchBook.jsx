import React, { useEffect, useState } from 'react';
import * as BooksApi from '../service/BooksAPI';
import { TypeBook } from './TypeBook';
import { useDebounce } from '../customehook/useDebounce';
export const SearchBook = (props) => {
    const [resultBooks, setResultBooks] = useState([]);
    const [keySearch, setKeySearch] = useState('');
    const searchTerm = useDebounce(keySearch, 500);

    const handleChange = (event) => {
      const newValue = event.target.value;
      setKeySearch(newValue);
    }

    const getAuthors = (book) => book.authors && book.authors.join(', ');
  
    useEffect(() => {
      const getBooks = async () => {
        if(searchTerm) {
          console.log(searchTerm);
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
              (resultBooks.length > 0 && resultBooks.map(book => (
                <div key={book.id} className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 188,
                        backgroundImage:
                          `url(${book.imageLinks && book.imageLinks.thumbnail})`,
                      }}
                    ></div>
                    <TypeBook/>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{getAuthors(book)}</div>
                </div>
              )))
            }
          </ol>
        </div>
      </div>
    )
}
