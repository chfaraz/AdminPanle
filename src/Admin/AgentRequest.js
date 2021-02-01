import React, { Component } from "react";
import firebase from "../config/firebaseConfig";
import { connect } from "react-redux";
import { createAgent } from "../store/actions/agentActions";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

var db = firebase.firestore();

class AgentRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      searchdata: null,
      data: [],
    };
  }

  add = async (id) => {
    let agent = null;
    await db
      .collection("agentRequest")
      .where(firebase.firestore.FieldPath.documentId(), "==", id)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          agent = doc.data();
        });
      })

      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    console.log(id);

    await this.props.createAgent(agent);

    db.collection("agentRequest")
      .doc(id)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };
  search = async () => {
    await db
      .collection("agentRequest")
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
  confirmDelete(id) {
    if (window.confirm("Are You Shore You Want To Delete This Request!")) {
      db.collection("agentRequest")
        .doc(id)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    } else {
    }
  }
  confirmAdd(id) {
    if (window.confirm("Are You Shore You Want To Approve This Request!")) {
      this.add(id);
    } else {
    }
  }
  render() {
    const { agentRequest } = this.props;
    return (
      <div className="agent-request">
        <h1>New Agents Requests</h1>
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
              <th>City</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th className="cellwidth">Description</th>
              <th>Approve</th>
            </tr>
          </thead>
          <tbody>
            {this.state.searchdata
              ? this.state.searchdata.map((agentRequest) => {
                  return (
                    <tr key={agentRequest.uid}>
                      <td>{agentRequest.displayName}</td>
                      <td>{agentRequest.phoneNumber}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>{agentRequest.description}</td>
                      <td>
                        <button
                          className="yes"
                          onClick={() => {
                            this.confirmAdd(agentRequest.id);
                          }}
                        >
                          YES
                        </button>
                        <button
                          className="no"
                          onClick={() => {
                            this.confirmDelete(agentRequest.id);
                          }}
                        >
                          NO
                        </button>
                      </td>
                    </tr>
                  );
                })
              : agentRequest &&
                agentRequest.map((agentRequest) => {
                  return (
                    <tr key={agentRequest.id}>
                      <td>{agentRequest.displayName}</td>
                      <td>{agentRequest.phoneNumber}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>{agentRequest.description}</td>
                      <td>
                        <button
                          className="yes"
                          onClick={() => {
                            this.confirmAdd(agentRequest.id);
                          }}
                        >
                          YES
                        </button>
                        <button
                          className="no"
                          onClick={() => {
                            this.confirmDelete(agentRequest.id);
                          }}
                        >
                          NO
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
const mapDispatchToProps = (dispatch) => {
  return {
    createAgent: (agent) => dispatch(createAgent(agent)),
  };
};
const mapStateToProps = (state) => {
  return {
    agentRequest: state.firestore.ordered.agentRequest,
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "agentRequest" }])
)(AgentRequest);
