import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CountNum: 0,
    };
  }

  incrementHandler() {
    this.setState({
      CountNum: this.state.CountNum + 1,
    });
  }

  DecrementHandler() {
    this.setState({
      CountNum: this.state.CountNum - 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.CountNum}</h1>
        <button onClick={() => this.incrementHandler()}>Increase</button>
        <button onClick={() => this.DecrementHandler()}>Decrease</button>
      </div>
    );
  }
}
