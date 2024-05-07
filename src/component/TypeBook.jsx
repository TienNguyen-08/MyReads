import React, { useState } from 'react'

export const TypeBook = ({book, onUpdateShelf}) => {
    const [type, setType] = useState(book.shelf);
    const handleChange = event => {
        setType(event.target.value);
        onUpdateShelf(book, event.target.value);
      }
    return (
        <div className="book-shelf-changer">
            <select value={type} onChange={handleChange}>
                <option value="none" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">
                    Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}
