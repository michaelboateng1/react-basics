import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./index.css";

function Booklist() {
  return (
    <section className="book-list">
      <Book
        image="https://picsum.photos/200/100"
        alt="Book cover"
        title="The Way to The Jungle."
        author="Michael Boateng"
      />
      <Book
        image="https://picsum.photos/200/100"
        alt="Book cover"
        title="The Way to The Jungle."
        author="Blue Ivy Carter"
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <div className="wrapper">
        <img src={props.image} alt={props.alt} width={200} height={100} />
      </div>
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Booklist />);
