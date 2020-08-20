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

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

export default class App extends Component {
  state = {
    color: "#000000"
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>random color</button>
        <LifeCycleSample color={this.state.color} />
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
