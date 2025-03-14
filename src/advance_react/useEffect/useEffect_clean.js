import React, { useState, useEffect } from "react";

function CleanFunction() {
  let [width, setWidth] = useState(window.innerWidth);

  const changeWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", changeWidth);
    console.log("event added");

    return () => {
      window.removeEventListener("resize", changeWidth);
      console.log("removed event");
    };
  }, []);

  return (
    <>
      <h1>Window</h1>
      <h2>{width} PX</h2>
    </>
  );
}

export default CleanFunction;
