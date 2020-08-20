import React, { Component } from "react";
import "./styles.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPracticeForClass from "./EventPracticeForClass";
import EventPracticeForFunction from "./EventPracticeForFunction";
import ValidationSample from "./ValidationSample";
import RefSample from "./RefSample";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <RefSample />
        <MyComponent favoriteNumber={4}> 어린이 </MyComponent>
        <Counter />
        <Say></Say>
        <EventPracticeForClass />
        <EventPracticeForFunction />
        <ValidationSample />
      </div>
    );
  }
}
