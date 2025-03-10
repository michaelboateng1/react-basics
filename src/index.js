import React from "react";
import ReactDOM from "react-dom/client";

function Greetings() {
  return (
    <div>
      <Name></Name>
      <Message />
    </div>
  );
}

const Name = () => <h1>My name is Michael Boateng</h1>;
const Message = () => {
  return <p>This is my message.</p>;
};

ReactDOM.createRoot(document.getElementById("root")).render(<Greetings />);
