import React, { useState } from "react";

function ControlledInputBasics() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const hundleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      setPeople((people) => {
        return [...people, { id: new Date().getTime().toString(), name, email }];
      });
      setName("");
      setEmail("");
    } else {
      console.log("Please fill in your name and email");
    }
  };

  return (
    <>
      <article>
        <form onSubmit={hundleSubmit}>
          <div className="form-controlle">
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="fullName" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-controlle">
            <label htmlFor="email">Email: </label>
            <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button type="submit">Add Person</button>
        </form>
      </article>
      {people.map((person) => {
        const { id, name, email } = person;
        return (
          <div className="person" key={id}>
            <h4>{name}</h4>
            <p>{email}</p>
          </div>
        );
      })}
    </>
  );
}

export default ControlledInputBasics;
