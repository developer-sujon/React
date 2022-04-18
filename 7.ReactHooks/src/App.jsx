import React, { Component } from "react";
import UseEffectHook from "./hooks/UseEffectHook";
import UseStateHook from "./hooks/UseStateHook";
import UseReducerHook from "./hooks/UseReducerHook";

class App extends Component {
  render() {
    return (
      <>
        {/* <UseStateHook /> */}
        {/* <UseEffectHook /> */}
        <UseReducerHook />
      </>
    );
  }
}

export default App;
