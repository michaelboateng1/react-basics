import React, { useState } from "react";

function UseStateWithObj() {
  const [person, setPerson] = useState({
    name: "Ivy",
    age: 12,
    message: "Some random message.",
  });

  const changeMessage = () => {
    if (person.message === "Some random message.") {
      setPerson({ ...person, message: "This is a new message." });
    } else {
      setPerson({ ...person, message: "Some random message." });
    }
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button type="button" className="btn" onClick={changeMessage}>
        Change message
      </button>
    </>
  );
}

export default UseStateWithObj;
