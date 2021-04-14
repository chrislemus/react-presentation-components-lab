// Code SimpleComponent Here
import React, { Component } from "react";

export default class SimpleComponent extends Component {
  state = {
    mood: "happy",
  };

  handleClick = () => {
    this.setState((state, props) => {
      const mood = state.mood === "happy" ? "sad" : "happy";
      return { ...state, mood };
    });
  };

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}
