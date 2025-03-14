import React, { useState } from "react";

function ShortCircuteExample() {
  const [text] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h1>{text || "Hello World"}</h1>
      <h1>{isError && "Error..."}</h1>
      <p>{isError ? "There's an error..." : "There's no error"}</p>
      <button
        type="button"
        className="btn"
        onClick={() => setIsError(!isError)}
      >
        Toggle
      </button>
    </>
  );
}

export default ShortCircuteExample;
