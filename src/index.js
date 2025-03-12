import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./index.css";

// JS
import Book from "./Book";
import { books } from "./books_data";

function Booklist() {
  return (
    <section className="book-list">
      {books.map((book, index) => {
        // const { image, alt, title, author } = book;
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Booklist />);
