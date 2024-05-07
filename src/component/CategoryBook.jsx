import React, { useEffect, useState } from 'react'
import { Book } from './Book';
export const CategoryBook = ({books, type, onUpdateShelf}) => {
    return (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{type.value}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {
                      books.map(book => (
                        <Book key={book.id} book={book} onUpdateShelf={onUpdateShelf}/>
                      ))
                    }
                    <li>
                      
                    </li>
                  </ol>
                </div>
              </div>
        </div>
    )
}
