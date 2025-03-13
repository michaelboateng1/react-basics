import React, { useState } from "react";

function Counter() {
  let [value, setValue] = useState(0);

  const reset = () => setValue(0);

  const increese = () => {
    setTimeout(() => setValue((prevValue) => prevValue + 1), 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Reguler Counter</h2>
          <h3>{value}</h3>
        </div>
        <button type="button" className="btn" onClick={() => setValue(value--)}>
          decreese
        </button>
        <button type="button" className="btn" onClick={reset}>
          reset
        </button>
        <button type="button" className="btn" onClick={() => setValue(value++)}>
          increese
        </button>
      </section>

      {/* Complex counter */}
      <section style={{ margin: "4rem 0" }}>
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Complex Counter</h2>
          <h3>{value}</h3>
          <button type="button" className="btn" onClick={increese}>
            increese
          </button>
        </div>
      </section>
    </>
  );
}

export default Counter;
