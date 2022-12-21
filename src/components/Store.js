import React, { Component } from "react";
import StoreChild from "./StoreChild";

export default class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalFruits: 25,
    };
  }

  handelGrabFruit = () => {
    console.log(hello);
  };

  render() {
    return (
      <div>
        <h1>Total fruits:{this.state.totalFruits}</h1>
        <StoreChild HandelGrabFruit={this.handelGrabFruit} />
      </div>
    );
  }
}
