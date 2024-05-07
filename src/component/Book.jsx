import React, { useEffect } from 'react'
import { TypeBook } from './TypeBook'

export const Book = ({book, onUpdateShelf}) => {
    const getAuthors = (book) => book.authors && book.authors.join(', ');
    return (
        <div>
            <div className="book">
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
                <TypeBook book={book} onUpdateShelf={onUpdateShelf}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{getAuthors(book)}</div>
            </div>
        </div>
    )
}
