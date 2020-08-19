import React from "react";
import "./styles.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPracticeForClass from "./EventPracticeForClass";
import EventPracticeForFunction from "./EventPracticeForFunction";

export default function App() {
  return (
    <div className="App">
      <MyComponent favoriteNumber={4}> 어린이 </MyComponent>
      <Counter />
      <Say></Say>
      <EventPracticeForClass />
      <EventPracticeForFunction />
    </div>
  );
}
