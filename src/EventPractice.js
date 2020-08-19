import React, { Component } from "react";

export default class EventPractice extends Component {
  state = {
    message: ""
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  handleClick = () => {
    this.setState({
      message: ""
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="whatever"
          value={this.state.message}
          onChange={this.onChange}
        />
        <button onClick={this.onClick}>확인</button>
      </div>
    );
  }
}
