import React from 'react'
import { TypeBook } from './TypeBook'

export const Book = ({book}) => {
    const getAuthors = (book) => book.authors && book.authors.join(', ');
    return (
        <div>
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
        </div>
    )
}
