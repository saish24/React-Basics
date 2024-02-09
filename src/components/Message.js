import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      subscribed: false,
      message: "Welcome to this website!",
      subscribeMessage: "Click to subscribe",
    };
  }

  OnClickSubscribe = () => {
    this.setState((prevState, props) => {
      const newState = Object.assign({}, prevState);

      newState.message = "Welcome to this website!";
      newState.subscribeMessage = "Click to subscribe";

      if (prevState.subscribed === true) {
        newState.message = "Thank you for subscribing!";
        newState.subscribeMessage = "Subscribed ✅";
      }
      newState.subscribed = !newState.subscribed;
      return newState;
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.OnClickSubscribe}>
          {this.state.subscribeMessage}
        </button>
      </div>
    );
  }
}

export default Message;
