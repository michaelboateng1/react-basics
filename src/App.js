import React from "react";

// CSS
import "./index.css";

// ! /* useState examples */
// import UseStateExample from "./advance_react/useState/useState_basics";
// import UseStateWithArray from "./advance_react/useState/useState_withArray";
// import UseStateWithObj from "./advance_react/useState/useState_objects";
// import Counter from "./advance_react/useState/useState_counter";

// ! /* useEffect examples */
// import UseEffectBasics from "./advance_react/useEffect/useEffect_basics";
// import CleanFunction from "./advance_react/useEffect/useEffect_clean";
// import FetchData from "./advance_react/useEffect/useEffect_fetch-data";

// ! /* conditional rendering */
// import ConditionalRExample from "./advance_react/conditional_rendring/conditional_rendring";
// import GetUser from "./advance_react/conditional_rendring/get-data";
// import ShortCircute from "./advance_react/conditional_rendring/short_circuting";
// import ShortCircuteExample from "./advance_react/conditional_rendring/short_circute-examples";
// import ShowAndHide from "./advance_react/conditional_rendring/show_hide";

// ! /* forms */
// import ControlledInputBasics from "./advance_react/forms/controlled_input";
// import MultipleInputs from "./advance_react/forms/multiple_inputs";

// ! /* useRef */
// import UncontrolledInput from "./advance_react/useRef/uncontrolled_input";

// ! /* useReducer */
// import Index from "./advance_react/useReducer";

// ! /* propDrilling */
// import PropDrilling from "./advance_react/prop_drilling/prop_drilling";

// ! /* ContextAPI/useContext */
import ContextAPI from "./advance_react/useContext/useContext";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        {/* useState hook examples */}
        {/* <UseStateExample /> */}
        {/* <UseStateWithArray /> */}
        {/* <UseStateWithObj /> */}
        {/* <Counter /> */}

        {/* useEffect hook examples */}
        {/* <UseEffectBasics /> */}
        {/* <CleanFunction /> */}
        {/* <FetchData /> */}

        {/* conditional rendering */}
        {/* <ConditionalRExample /> */}
        {/* <GetUser /> */}
        {/* <ShortCircute /> */}
        {/* <ShortCircuteExample /> */}
        {/* <ShowAndHide /> */}

        {/* controlled input */}
        {/* <ControlledInputBasics /> */}
        {/* <MultipleInputs /> */}

        {/* useRef hook */}
        {/* <UncontrolledInput /> */}

        {/* useReducer hook */}
        {/* <Index /> */}

        {/* propDrilling */}
        {/* <PropDrilling /> */}

        {/* contextAPI/useContext */}
        <ContextAPI />
      </div>
    </React.Fragment>
  );
}

export default App;
