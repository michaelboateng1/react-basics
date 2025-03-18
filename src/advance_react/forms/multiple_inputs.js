import React, { useState } from "react";

function MultipleInputs() {
  const [person, setPerson] = useState({ name: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const hundleChange = (e) => {
    const elementName = e.target.name;
    const value = e.target.value;
    const newPerson = { ...person, [elementName]: value, id: new Date().getTime().toString() };
    setPerson(newPerson);
  };

  const hundleSubmit = (e) => {
    const { name, email, age } = person;
    e.preventDefault();

    if ((name, email, age)) {
      setPeople([...people, person]);
      setPerson({ name: "", email: "", age: "" });
    } else {
      console.log("Please fill the form.");
    }
  };

  return (
    <>
      <article>
        <form onSubmit={hundleSubmit}>
          <div className="form-controlle">
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" value={person.name} onChange={hundleChange} />
          </div>
          <div className="form-controlle">
            <label htmlFor="email">Email: </label>
            <input type="text" id="email" name="email" value={person.email} onChange={hundleChange} />
          </div>
          <div className="form-controlle">
            <label htmlFor="age">Age: </label>
            <input type="number" id="age" name="age" value={person.age} onChange={hundleChange} />
          </div>
          <button type="submit">Add Person</button>
        </form>
      </article>
      {people.map((person) => {
        const { id, name, email, age } = person;
        return (
          <div className="person" key={id}>
            <h4>{name}</h4>
            <p>{age}</p>
            <p>{email}</p>
          </div>
        );
      })}
    </>
  );
}

export default MultipleInputs;
