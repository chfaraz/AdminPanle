import React, { Component } from 'react'
import Login from './Login'
import Home from './Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';

class App extends Component {



  render() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home}/>
        </Switch>
      </div>
      </BrowserRouter>
  )

  }
}

export default App;
