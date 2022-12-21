import React, { Component } from "react";

export default class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      place: "playGround",
      sticker: "🏏⚽🦶",
    };
  }

  placeChangingHandler() {
    this.setState({
      place: "home",
      sticker: "🏠🏡",
    });
  }

  render() {
    return (
      <div>
        <h1>
          welcome to our {this.state.place} {this.state.sticker}.....
        </h1>
        <button onClick={() => this.placeChangingHandler()}>Go to home</button>
      </div>
    );
  }
}
