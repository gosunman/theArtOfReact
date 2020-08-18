import React from "react";
import "./styles.css";
import MyComponent from "./MyComponent";

export default function App() {
  return (
    <div className="App">
      <MyComponent name="선만" favoriteNumber={3}>
        innerText
      </MyComponent>
    </div>
  );
}
