import React, { useState } from "react";

function ShortCircute() {
  let [text, setText] = useState("Michael");
  let firstText = text || <h1>First circute</h1>;
  let secondText = text && <h1>Second circute</h1>;

  return (
    <>
      <div>{firstText}</div>
      <div>{secondText}</div>
    </>
  );
}

export default ShortCircute;
