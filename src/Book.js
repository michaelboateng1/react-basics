import React from "react";

const displayBookAuthor = (author) => {
  alert(author);
};

const displayBookTitle = (title) => {
  alert(title);
};

const Book = (props) => {
  // console.log(props);
  const { title, image, author, alt } = props;
  return (
    <article className="book">
      <div className="wrapper">
        <img
          src={image}
          alt={alt}
          width={200}
          height={100}
          onMouseOver={() => displayBookTitle(title)}
        />
      </div>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={() => console.log(title)}>
        Show title
      </button>
      <button type="button" onClick={() => displayBookAuthor(author)}>
        Show author
      </button>
    </article>
  );
};

export default Book;
