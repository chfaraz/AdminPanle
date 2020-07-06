import React, { Component } from 'react'
import AgentRequest from './Admin/AgentRequest';
import AddRequest from './Admin/AddRequest';
import Adds from './Admin/Adds';
import Agents from './Admin/Agents';
import Users from './Admin/Users';
import Properties from './Admin/Properties';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {NavLink} from 'react-router-dom';

class Home extends Component {
render(){
  return (
    <BrowserRouter>
        <div className="home">
            <ul>
                <li>
                <NavLink to="/agentRequest" activeClassName="active" className="nonactive link-sizea">
                    Agent Requests
                </NavLink>
                </li>
                <li>
                <NavLink to="/agents" activeClassName="active" className="nonactive link-sizeb">
                    Agents
                </NavLink>
                </li>   
                <li>
                <NavLink to="/addRequest" activeClassName="active" className="nonactive link-sizec">
                    Ad Requests
                </NavLink>
                </li>
                <li> 
                <NavLink to="/adds" activeClassName="active" className="nonactive link-sized">
                    Ads
                </NavLink>
                </li>
                <li> 
                <NavLink to="/users" activeClassName="active" className="nonactive link-sizee">
                    Users
                </NavLink>
                </li>
                <li> 
                <NavLink to="/properties" activeClassName="active" className="nonactive link-sizef">
                    Properties
                </NavLink>
                </li>
            </ul>
            <Switch>
                <Route path="/agentRequest" exact component={AgentRequest} />
                <Route path="/agents" exact component={Agents}/>
                <Route path="/addRequest" exact component={AddRequest} />
                <Route path="/adds" exact component={Adds}/>
                <Route path="/users" exact component={Users}/>
                <Route path="/properties" exact component={Properties}/>
            </Switch>
            
        </div>
    </BrowserRouter>
  )
}
}

export default Home;
