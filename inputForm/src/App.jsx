import React, { Component } from "react";
import Main from "./components/form/Main";

class App extends Component {
  state = {
    users: [],
  };

  createUser = (user) => {
    user.id = new Date().getTime().toString();
    this.setState({
      users: [...this.state.users, user],
    });
  };

  render() {
    return (
      <div className="container p-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1>Create a new from</h1>
            <Main createUser={this.createUser} />
          </div>
          <div className="col-md-6">
            <h1>Register users</h1>
            {this.state.users.map((user) => (
              <li key={user.id}>{user.values.email} > </li>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
