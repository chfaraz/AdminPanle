import React, { Component } from "react";

import firebase from "../config/firebaseConfig";

var db = firebase.firestore();

class Users extends Component {
  state = {
    query: "",
    user: [],
  };

  search = async () => {
    await db
      .collection("users")
      .where("phoneNumber", "==", this.state.query)
      .where("UserType", "==", "user")
      .get()
      .then((querySnapshot) => {
        let user = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          let data = doc.data();
          user.push(data);
        });
        this.setState({
          ...this.state,
          user: user,
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  };
  handelChange = (e) => {
    this.setState({
      ...this.state,
      query: e.target.value,
    });
  };
  confirmBlock = (id) => {
    if (window.confirm("Are You Shore You Want To Block This User!")) {
      console.log(
        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
      );
    } else {
    }
  };
  render() {
    return (
      <div className="agent-request">
        <h1>Search A User</h1>
        <div className="search-bar">
          <input
            type="text"
            className="search"
            placeholder="Enter Phone Number"
            onChange={this.handelChange}
          ></input>
          <button className="search-btn" onClick={this.search}>
            Search
          </button>
        </div>
        <table className="agent-request-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone No</th>
              <th>Block</th>
            </tr>
          </thead>
          <tbody>
            {this.state.user.map((user) => {
              return (
                <tr key={user.uid}>
                  <td>{user.displayName}</td>
                  <td>{user.phoneNumber}</td>
                  <td>
                    <button
                      className="block"
                      onClick={() => {
                        this.confirmBlock(user.uid);
                      }}
                    >
                      Block
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Users;
