import React, { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";
import ForReducer from "./ForReducer";

import "./styles.css";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <h1>New App</h1>
      <h1>Please, Work For Me</h1>
      <hr />
      <ForReducer />
      <hr />
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "hide" : "show"}
      </button>
      {visible && <Info />}
      <hr />
      <Counter />
    </div>
  );
};

export default App;
