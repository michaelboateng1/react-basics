import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./index.css";

function Booklist() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <BookTitle />
      <Author />
    </article>
  );
};

const Image = () => <img src="https://picsum.photos/200/100" alt="" />;

const BookTitle = () => <h1>The Way to The Jungle.</h1>;

const Author = () => <h4>Michael Boateng</h4>;

ReactDOM.createRoot(document.getElementById("root")).render(<Booklist />);
