import React, { Component } from "react";
import "./styles.css";

export default class ValidationSample extends Component {
  input = React.createRef();

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
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <h1>ref ì°ìµ</h1>

        <input
          ref={this.input}
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
        <button onClick={this.handleButtonClick}>ê²ì¦íê¸°</button>
      </div>
    );
  }
}
