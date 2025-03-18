import React, { useState, useContext } from "react";
import { data } from "../../data";

const PeopleContext = React.createContext();

function ContextAPI() {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <PeopleContext.Provider value={{ removeItem, people }}>
      <h1>ContextAPI/useContext</h1>
      <List people={people} />
    </PeopleContext.Provider>
  );
}

function List({ people }) {
  const peopleData = useContext(PeopleContext);
  return (
    <>
      {peopleData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
}

function SinglePerson({ id, name }) {
  const { removeItem } = useContext(PeopleContext);
  return (
    <div className="item">
      <p>{name}</p>
      <button type="button" onClick={() => removeItem(id)}>
        romove
      </button>
    </div>
  );
}

export default ContextAPI;
