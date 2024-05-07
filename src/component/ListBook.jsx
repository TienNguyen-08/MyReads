import React, { useEffect, useState } from 'react'
import { CategoryBook } from './CategoryBook'

export const ListBook = ({onpenSearch, books, typeBook, onUpdateShelf}) => {
  
  function bookFillerByType (type){
    return books.filter(book => book.shelf === type.key);
  }

    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {
              typeBook.map(type => (
                <CategoryBook key={type.key} books={bookFillerByType(type)} type={type} onUpdateShelf={onUpdateShelf}/>
              ))
            }
            <div>
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => {onpenSearch()}}>Add a book</a>
          </div>
        </div>
    )
}
