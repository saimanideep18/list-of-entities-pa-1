import React from 'react';
import './bookcard.css'; // Optional: Add styles here

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <h4>{book.author}</h4>
      <p>{book.genre}</p>
    </div>
  );
};

export default BookCard;