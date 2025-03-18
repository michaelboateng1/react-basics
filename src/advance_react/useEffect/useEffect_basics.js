import React, { useEffect, useState } from "react";

function UseEffectBasics() {
  let [value, setValue] = useState(0);

  let [text, setText] = useState("I'm learning useEffect basics");

  useEffect(() => {
    if (value >= 5) {
      document.title = `New title (${value})`;
    }
  }, [value]);

  useEffect(() => {
    if (value >= 20) {
      setText("This is awesome...");
    }
  }, [value]);

  useEffect((some) => {
    console.log(some);
    console.log("It's undifined, there's nothing");
    console.log("This is fun...");
  }, []);

  return (
    <>
      <h1>{text}</h1>
      <h2>{value}</h2>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        Click
      </button>
    </>
  );
}

export default UseEffectBasics;
