import React, { Component } from "react";
import "./styles.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPracticeForClass from "./EventPracticeForClass";
import EventPracticeForFunction from "./EventPracticeForFunction";
import ValidationSample from "./ValidationSample";
import RefSample from "./RefSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <LifeCycleSample />
        <br />
        <IterationSample />
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
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
