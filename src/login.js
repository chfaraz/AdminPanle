import React, { Component } from "react";
import { signIn } from "./store/actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/home/agentRequest" />;
    return (
      <div className="login">
        <div className="center">
          <form onSubmit={this.handleSubmit}>
            <label>User Name:</label>
            <br />
            <input type="text" id="email" onChange={this.handelChange} />
            <br />
            <label>Password:</label>
            <br />
            <input type="Password" id="password" onChange={this.handelChange} />
            <div className="login-div">
              <button type="submit" className="login-button">
                Login
              </button>
            </div>
            <div className="red">{authError ? <p>{authError}</p> : null}</div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
