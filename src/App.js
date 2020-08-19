import React from "react";
import "./styles.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter";

export default function App() {
  return (
    <div className="App">
      <MyComponent favoriteNumber={4}> 어린이 </MyComponent>
      <Counter />
    </div>
  );
}
