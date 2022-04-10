import React, { Component } from "react";
import LifeCycle from "./components/LifeCycle";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    console.log("constructor called");
  }

  componentDidMount = () => {
    console.log("componentDidMount called");
  };

  componentDidUpdate = () => {
    console.log("componentDidUpdate called", this.state.count);
  };

  render() {
    console.log("render called");

    return (
      <div>
        Click
        <br />
        {this.state.count % 2 === 0 && <LifeCycle value={this.state.count} />}
      </div>
    );
  }
}

export default App;
