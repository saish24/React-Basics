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

  OnClickSubscribe() {
    this.setState((prevState, props) => {
      var message = "Welcome to this website!";
      var subscribeMessage = "Click to subscribe";

      if (prevState.subscribed === true) {
        message = "Thank you for subscribing!";
        subscribeMessage = "Subscribed ✅";
      }
      return {
        subscribed: !prevState.subscribed,
        message: message,
        subscribeMessage: subscribeMessage,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button
          onClick={() => {
            this.OnClickSubscribe();
          }}
        >
          {this.state.subscribeMessage}
        </button>
      </div>
    );
  }
}

export default Message;
