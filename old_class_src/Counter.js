import React, { Component } from "react";

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   // stateì ì´ê¹ê° ì¤ì íê¸°
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0,
  //   };
  // }

  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
    // stateë¥¼ ì¡°íí  ëë this.stateë¡ ì¡°íí©ëë¤.
    return (
      <div>
        <h1>{number}</h1>
        <h2>{fixedNumber}</h2>
        <button
          // onClick={() => {
          //   this.setState({ number: number + 1 });
          //   this.setState({ number: this.state.number + 1 });
          // }}
          onClick={() => {
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1
        </button>
        <button
          // onClick={() => {
          //   this.setState({ number: number + 1 });
          //   this.setState({ number: this.state.number + 1 });
          // }}
          onClick={() => {
            this.setState({ number: number - 1 }, () => {
              console.log("-1 reduced");
            });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

export default Counter;
