import React, { useState } from "react";
import { data } from "../../data";

function PropDrilling() {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <>
      <h1>Prop Drilling</h1>
      <List people={people} removeItem={removeItem} />
    </>
  );
}

function List({ people, removeItem }) {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} removeItem={removeItem} />;
      })}
    </>
  );
}

function SinglePerson({ id, name, removeItem }) {
  return (
    <div className="item">
      <p>{name}</p>
      <button type="button" onClick={() => removeItem(id)}>
        romove
      </button>
    </div>
  );
}

export default PropDrilling;
