import React, { Component } from "react";
import "./styles.css";

export default class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validates: false
  };

  handleChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000"
    });
  };

  render() {
    return (
      <div>
        <h1>ref 연습</h1>

        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}
