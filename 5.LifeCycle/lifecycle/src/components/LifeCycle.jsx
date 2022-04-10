import React, { Component } from "react";

export class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentWillUnmount = () => {
    console.log("componentWillUnmount called");
  };

  static getDerivedStateFromProps = (props, state) => {
    return { count: props * 5 };
  };

  render() {
    return <div>LifeCycle {this.state.count}</div>;
  }
}

export default LifeCycle;
