import React from "react";

function Book({ title, author, coverImage }) {
    return (
      <div className="book">
        <div className="book-cover">
          <img src={coverImage} alt={title} />
        </div>
        <div className="book-details">
          <h2 className="book-title">{title}</h2>
          <h3 className="book-author">{author}</h3>
        </div>
      </div>
    );
  }
  
  export default Book;