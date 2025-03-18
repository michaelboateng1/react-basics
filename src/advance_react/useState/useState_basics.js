// useState Hook
import React, { useState } from "react";

function UseStateExample() {
  let [title, setTitle] = useState("This is the title");
  const changeTitle = () => {
    if (title === "This is the title") {
      setTitle("Title changed to a random title");
    } else {
      setTitle("This is the title");
    }
  };
  return (
    <div className="container">
      <h1>{title}</h1>
      <button type="button" onClick={changeTitle}>
        Change the title
      </button>
    </div>
  );
}

export default UseStateExample;
