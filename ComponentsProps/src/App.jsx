import React from "react";

class Child extends React.Component {
  render() {
    this.props.func(this);
    return <h1>hello world</h1>;
  }
}

class App extends React.Component {
  getContext(context) {
    console.log(context);
  }
  render() {
    this.getContext(this);
    return (
      <div>
        <Child func={this.getContext} />
      </div>
    );
  }
}

export default App;
