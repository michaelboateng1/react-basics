import React, { useEffect, useRef } from "react";

function UncontrolledInput() {
  const inputContainer = useRef(null);
  const displayInput = useRef(null);

  const hundleSubmit = (e) => {
    e.preventDefault();

    if (inputContainer.current.value) {
      console.log(inputContainer.current.value);
      displayInput.current.innerText = inputContainer.current.value;
      inputContainer.current.value = "";
    } else {
      console.log("enter some thing...");
    }
  };
  return (
    <>
      <form onSubmit={hundleSubmit}>
        <div className="form-controlle">
          <div ref={displayInput}>Hello World</div>
          <input type="text" ref={inputContainer} />
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
}

export default UncontrolledInput;
