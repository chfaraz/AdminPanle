import React, { Component } from "react";
import firebase from "../config/firebaseConfig";
import { blockAgent, unblockAgent } from "../store/actions/agentActions";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
var db = firebase.firestore();

class Agents extends Component {
  state = {
    query: "",
    searchdata: null,
    data: [],
  };
  componentDidMount() {
    db.collection("users")
      .where("UserType", "==", "Agent")
      .get()
      .then((querySnapshot) => {
        let data = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          data.push(doc.data());
        });
        this.setState({
          ...this.state,
          data: data,
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }
  search = async () => {
    await db
      .collection("users")
      .where("phoneNumber", "==", this.state.query)
      .get()
      .then((querySnapshot) => {
        let searchdata = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          let data = doc.data();
          searchdata.push(data);
        });
        this.setState({
          ...this.state,
          searchdata: searchdata,
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
    if (window.confirm("Are You Shore You Want To Block This Agent!")) {
      console.log(
        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
      );
    } else {
    }
  };
  confirmUnBlock = (id) => {
    if (window.confirm("Are You Shore You Want To UnBlock This Agent!")) {
      console.log(
        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
      );
    } else {
    }
  };
  block = async (id) => {
    let x = null;
    await db
      .collection("users")
      .where(firebase.firestore.FieldPath.documentId(), "==", id)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          x = doc.data();
        });
      })

      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    console.log(id);

    await this.props.blockAgent(x);
    await this.refresh();
  };
  refresh = async () => {
    await db
      .collection("users")
      .where("UserType", "==", "Agent")
      .get()
      .then((querySnapshot) => {
        let data = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          data.push(doc.data());
        });
        this.setState({
          ...this.state,
          data: data,
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  };
  unblock = async (id) => {
    let x = null;
    await db
      .collection("users")
      .where(firebase.firestore.FieldPath.documentId(), "==", id)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          x = doc.data();
        });
      })

      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    console.log(id);

    await this.props.unblockAgent(x);
    await this.refresh();
  };
  render() {
    return (
      <div className="agent-request">
        <h1>List of Agents</h1>
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
        <table className="agent-request-table agent-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone No</th>
              <th>City</th>
              <th>Age</th>
              <th>Block</th>
            </tr>
          </thead>
          <tbody>
            {this.state.searchdata
              ? this.state.searchdata.map((agent) => {
                  return (
                    <tr key={agent.uid}>
                      <td>{agent.displayName}</td>
                      <td>{agent.phoneNumber}</td>
                      <td>{agent.city}</td>
                      <td>{agent.age}</td>
                      <td>
                        <button
                          className="block"
                          onClick={() => {
                            this.confirmBlock(agent.uid);
                          }}
                        >
                          Block
                        </button>
                      </td>
                    </tr>
                  );
                })
              : this.state.data.map((agent) => {
                  return (
                    <tr key={agent.uid}>
                      <td>{agent.displayName}</td>
                      <td>{agent.phoneNumber}</td>
                      <td>{agent.city}</td>
                      <td>{agent.age}</td>
                      <td>
                        {agent.Block === false ? (
                          <button
                            className="block"
                            onClick={() => {
                              this.confirmBlock(agent.uid);
                              this.block(agent.uid);
                            }}
                          >
                            Block
                          </button>
                        ) : (
                          <button
                            className="unblock"
                            onClick={() => {
                              this.confirmUnBlock(agent.uid);
                              this.unblock(agent.uid);
                            }}
                          >
                            Unblock
                          </button>
                        )}
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

const mapDispatchToProps = (dispatch) => {
  return {
    blockAgent: (agent) => dispatch(blockAgent(agent)),
    unblockAgent: (agent) => dispatch(unblockAgent(agent)),
  };
};
const mapStateToProps = (state) => {
  return {
    users: state.firestore.ordered.users,
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "users" }])
)(Agents);
