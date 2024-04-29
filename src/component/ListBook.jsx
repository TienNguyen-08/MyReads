import React, { useEffect, useState } from 'react'
import { CategoryBook } from './CategoryBook'

export const ListBook = ({onpenSearch, books}) => {
  const [typeBook,] = useState([
    {key: "currentlyReading", value: "Currently Reading"},
    {key: "wantToRead", value: "Want To Read"},
    {key: "Read", value: "Read"}
  ]);
    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {
              typeBook.map(type => (
                <CategoryBook  books={books} type={type} key={type.value}/>
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
