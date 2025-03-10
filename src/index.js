import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./index.css";

function Booklist() {
  return (
    <section className="book-list">
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

const author = "Michael Boateng";
const Book = () => {
  const title = "The Way to The Jungle.";
  return (
    <article className="book">
      <div className="wrapper">
        <img
          src="https://picsum.photos/200/100"
          alt="Book cover"
          width={200}
          height={100}
        />
      </div>
      <h1>{title}</h1>
      <h4
        style={{ color: "#617d98", fontSize: "0.78rem", marginTop: "0.5rem" }}
      >
        {author}
      </h4>
    </article>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Booklist />);
