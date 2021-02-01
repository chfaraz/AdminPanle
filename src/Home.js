import React, { Component } from "react";
import AgentRequest from "./Admin/AgentRequest";
import AddRequest from "./Admin/AddRequest";
import Adds from "./Admin/Adds";
import Agents from "./Admin/Agents";
import Users from "./Admin/Users";
import Properties from "./Admin/Properties";
import AddPark from "./places/AddPark";
import AddSchool from "./places/AddSchool";
import AddHospital from "./places/AddHospital";
import { Redirect, Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "./store/actions/authActions";

import { UserProvider } from "./UserContext";

class Home extends Component {
  render() {
    const place = { name: "" };

    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />;
    return (
      <UserProvider value={place}>
        <div className="home">
          <ul>
            <li>
              <NavLink
                to="/home/agentRequest"
                activeClassName="active"
                className="nonactive link-sizea"
              >
                Agent Requests
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/home/agents"
                activeClassName="active"
                className="nonactive link-sizeb"
              >
                Agents
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/home/addRequest"
                activeClassName="active"
                className="nonactive link-sizec"
              >
                FeedBack
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/home/users"
                activeClassName="active"
                className="nonactive link-sizee"
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/home/properties"
                activeClassName="active"
                className="nonactive link-sizef"
              >
                Properties
              </NavLink>
            </li>
            <li onClick={(place.name = "school")}>
              <NavLink
                to="/home/addSchool"
                activeClassName="active"
                className="nonactive link-sizeg"
              >
                Add Schools
              </NavLink>
            </li>
            <li onClick={(place.name = "hospital")}>
              <NavLink
                to="/home/addHospital"
                activeClassName="active"
                className="nonactive link-sizeh"
              >
                Add Hospital
              </NavLink>
            </li>
            <li onClick={(place.name = "park")}>
              <NavLink
                to="/home/addPark"
                activeClassName="active"
                className="nonactive link-sizei"
              >
                Add Parks
              </NavLink>
            </li>
            <li>
              <a onClick={this.props.signOut} className="nonactive link-sizej">
                Logout
              </a>
            </li>
          </ul>
          <Switch>
            <Route path="/home/agentRequest" component={AgentRequest} />
            <Route path="/home/agents" component={Agents} />
            <Route path="/home/addRequest" component={AddRequest} />
            <Route path="/home/adds" component={Adds} />
            <Route path="/home/users" component={Users} />
            <Route path="/home/properties" component={Properties} />
            <Route path="/home/addPark" component={AddPark} />
            <Route path="/home/addSchool" component={AddSchool} />
            <Route path="/home/addHospital" component={AddHospital} />
          </Switch>
        </div>
      </UserProvider>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
