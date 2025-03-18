import React, { useEffect } from "react";

function Modal({ modalContent, closeModal }) {
  useEffect(() => {
    setTimeout(() => closeModal(), 3000);
  });
  return <h1 style={{ padding: "0.5em", backgroundColor: "#fff", color: "red", fontSize: "1rem", borderRadius: "10px" }}>{modalContent}</h1>;
}

export default Modal;
