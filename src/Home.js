import React, { Component } from 'react'
import AgentRequest from './Admin/AgentRequest';
import AddRequest from './Admin/AddRequest';
import Adds from './Admin/Adds';
import Agents from './Admin/Agents';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';

class Home extends Component {
render(){
  return (
    <BrowserRouter>
        <div className="home">
            <ul>
                <Link to="/agentRequest">
                    <li>Agent Requests</li>
                </Link>
                <Link to="/agents">
                    <li>Agents</li>
                </Link>
                <Link to="/addRequest">
                    <li>Add Requests</li>
                </Link>
                <Link to="/adds">
                    <li>Adds</li>
                </Link>
            </ul>
            <Switch>
                <Route path="/agentRequest" exact component={AgentRequest} />
                <Route path="/agents" exact component={Agents}/>
                <Route path="/addRequest" exact component={AddRequest} />
                <Route path="/adds" exact component={Adds}/>
            </Switch>
            
        </div>
    </BrowserRouter>
  )
}
}

export default Home;
