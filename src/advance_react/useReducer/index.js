import React, { useState, useReducer, useEffect, useRef } from "react";
import { data } from "../../data";
import Modal from "./Modal";

// importing the reducer function
import { reducer } from "./reducer";

const defaultState = {
  people: [],
  showModal: false,
  modalContent: "This is a modal",
};

function Index() {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const inputContainer = useRef(null);

  useEffect(() => {
    inputContainer.current.focus();
  });

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const hundleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "TESTING", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "EMPTY_VALUE" });
      setName("");
    }
  };

  return (
    <>
      {state.showModal && <Modal modalContent={state.modalContent} closeModal={closeModal} />}
      <form onSubmit={hundleSubmit}>
        <div className="form-controlle">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} ref={inputContainer} />
          <button type="submit">Add</button>
        </div>
      </form>

      {state.people.map(({ name, id }) => {
        return (
          <div className="item" key={id}>
            <p>{name}</p>
          </div>
        );
      })}
    </>
  );
}

export default Index;
