import React, { Component } from "react";

export default class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goals: 0,
    };
    //state are por bind korte hoi constructor a bind korte cayle------(last function )
    // this.MakeGoalsHandler = this.MakeGoalsHandler.bind(this);
  }
  MakeGoalsHandler = () => {
    this.setState({
      goals: this.state.goals + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Goals:{this.state.goals}</h1>
        {/* <button onClick={this.MakeGoalsHandler.bind(this)}>MAke goals</button>
        <button
          onClick={() => {
            this.MakeGoalsHandler();
          }}
        >
          MAke goals inline arrow
        </button>
        <button onClick={this.MakeGoalsHandler}>
          MAke goals bind in constructor
        </button> */}
        <button onClick={this.MakeGoalsHandler}>
          MAke goals make arrow in class
        </button>
      </div>
    );
  }
}
