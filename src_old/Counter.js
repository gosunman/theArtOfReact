import React, { Component } from "react";

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   // state의 초깃값 설정하기
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
    // state를 조회할 때는 this.state로 조회합니다.
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
