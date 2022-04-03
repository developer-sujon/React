import React, { Component } from "react";
import { Button, Typography } from "antd";

const { Title } = Typography;

class Timer extends Component {
  state = {
    count: 0,
  };

  isTimer = null;

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  startTimer = () => {
    this.isTimer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  };

  stopTimer = () => {
    if (this.isTimer) {
      clearInterval(this.isTimer);
      this.isTimer = null;
    }
  };

  resetTimer = () => {
    if (this.isTimer) {
      this.setState({ count: 0 });
      clearInterval(this.isTimer);
      this.isTimer = null;
    }
  };

  render() {
    return (
      <div style={{ padding: "100px" }}>
        <Title>{this.state.count}</Title>
        <Button onClick={this.incrementCount}>+</Button>
        <Button onClick={this.decrementCount}>-</Button>

        <br />
        <br />

        <div>
          <Button type="primary" onClick={this.startTimer}>
            Start
          </Button>
          <Button onClick={this.stopTimer}>Stop</Button>
          <Button type="primary" danger onClick={this.resetTimer}>
            Reset
          </Button>
        </div>
      </div>
    );
  }
}

export default Timer;