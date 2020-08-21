import React, { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";

import "./styles.css";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <h1>New App</h1>
      <h1>Please, Work For Me</h1>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "hide" : "show"}
      </button>
      {visible && <Info />}
      <Counter />
    </div>
  );
};

export default App;
