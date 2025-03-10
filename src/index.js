import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./index.css";

// Variables
const books = [
  {
    id: 1,
    image: "https://picsum.photos/200/100",
    alt: "Book cover",
    title: "The Way to The Jungle.",
    author: "Michael Boateng",
  },
  {
    id: 2,
    image: "https://picsum.photos/200/100",
    alt: "Book cover",
    title: "The Way to Music",
    author: "Blue Ivy Carter",
  },
];

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

const Book = (props) => {
  console.log(props);
  const { title, image, author, alt } = props;
  return (
    <article className="book">
      <div className="wrapper">
        <img src={image} alt={alt} width={200} height={100} />
      </div>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Booklist />);
