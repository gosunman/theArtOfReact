import React, { useState } from "react";

export default function Counter() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>The number is {value}</h1>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setValue(value - 1);
        }}
      >
        -1
      </button>
    </div>
  );
}
