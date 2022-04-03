import React, { Component } from "react";

import { Button, Typography } from "antd";
const { Title } = Typography;

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount() {
    this.setState((prev) => {
      return { count: this.state.count + 1 };
    }, ()=> console.log(this.state.count));

  }

  render() {
    return (
      <div style={{ padding: "100px" }}>
        <Title level={1}>{this.state.count}</Title>
        <Button onClick={this.incrementCount.bind(this)}>+</Button>
      </div>
    );
  }
}

export default Test;
