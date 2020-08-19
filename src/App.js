import React from "react";
import "./styles.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";

export default function App() {
  return (
    <div className="App">
      <MyComponent favoriteNumber={4}> 어린이 </MyComponent>
      <Counter />
      <Say></Say>
      <EventPractice />
    </div>
  );
}
