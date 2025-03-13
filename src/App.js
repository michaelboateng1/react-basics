import React from "react";

// CSS
import "./index.css";

// useState examples
// import UseStateExample from "./advance_react/useState/useState_basics";
// import UseStateWithArray from "./advance_react/useState/useState_withArray";
// import UseStateWithObj from "./advance_react/useState/useState_objects";
import Counter from "./advance_react/useState/useState_counter";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        {/* <UseStateExample /> */}
        {/* <UseStateWithArray /> */}
        {/* <UseStateWithObj /> */}
        <Counter />
      </div>
    </React.Fragment>
  );
}

export default App;
