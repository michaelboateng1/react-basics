import React from "react";
import { data } from "../../data";

function UseStateWithArray() {
  let [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newArray = people.filter((person) => person.id !== id);
    setPeople(newArray);
  };
  return (
    <>
      {people.map((people) => {
        let { id, name } = people;
        return (
          <div className="item" key={id}>
            <p>{name}</p>
            <button
              type="button"
              className="remove"
              onClick={() => removeItem(id)}
            >
              remove
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        Clear all
      </button>
    </>
  );
}

export default UseStateWithArray;
