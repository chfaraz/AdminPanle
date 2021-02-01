import React, { Component } from "react";
import Login from "./Login";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
