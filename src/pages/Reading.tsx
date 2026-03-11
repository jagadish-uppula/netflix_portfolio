import React, { useEffect, useState } from 'react';
import './Reading.css';
import { getReading } from '../queries/getReading';
import { Book } from '../types';

const Reading: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function fetchBooks() {
      const data = await getReading();
      setBooks(data);
    }
    fetchBooks();
  }, []);

  if (books.length === 0) return <div>Loading...</div>;

  return (
    <div className="reading-container">
      <h2 className="reading-title">📚 Reading List</h2>
      <p className="reading-intro">These books have influenced perspectives, motivation, and self-growth.</p>
      <div className="books-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
            <img src={book.image} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <h4 className="book-author">{book.author}</h4>
              <p className="book-description">Enter description for {book.title} here.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;
