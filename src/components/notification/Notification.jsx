import React, { Component } from "react";
import { NotificationMessage } from "./Notification.style";

export default class Notification extends Component {
  render() {
    return (
      <div>
        <NotificationMessage>{this.props.message}</NotificationMessage>
      </div>
    );
  }
}
