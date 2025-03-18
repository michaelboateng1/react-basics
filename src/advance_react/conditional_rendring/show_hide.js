import React, { useEffect, useState } from "react";

function ShowAndHide() {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && <Item />}
      <button type="button" className="btn" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
    </>
  );
}

function Item() {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <>
      <h1>Window</h1>
      <h2>{size}</h2>
    </>
  );
}

export default ShowAndHide;
