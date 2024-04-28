import React, { useEffect, useState } from 'react'
import { CategoryBook } from './CategoryBook'
import * as BooksApi from '../service/BooksAPI';

export const ListBook = (props) => {
  const typeBook = {
    currentlyReading : "Currently Reading",
    wantToRead : "Want To Read",
    read: "Read"
  }

  
    useEffect( async () => {
      const books = await BooksApi.getAll();
      console.log(books);
    }, []);
    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <CategoryBook tittel={typeBook.currentlyReading}/>
              <CategoryBook tittel={typeBook.wantToRead}/>
              <CategoryBook tittel={typeBook.read}/>
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => {props.onpenSearch()}}>Add a book</a>
          </div>
        </div>
    )
}
