import React, { Component } from "react";
import firebase from "../config/firebaseConfig";

var db = firebase.firestore();

class AddRequest extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    db.collection("feedBack")
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
  refresh = async () => {
    await db
      .collection("feedBack")
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
  confirmDelete = (id) => {
    if (window.confirm("Are You Shore You Want To Delete This FeedBack!")) {
      db.collection("feedBack")
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
    this.refresh();
  };
  render() {
    return (
      <div className="agent-request">
        <h1>New FeedBacks</h1>

        <table className="agent-request-table">
          <thead>
            <tr>
              <th>Agent</th>
              <th>Agent Number</th>
              <th>User</th>
              <th>User Number</th>
              <th>User Type</th>
              <th>Message</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((data) => {
              return (
                <tr key={data.uid}>
                  <td>{data.agentName}</td>
                  <td>{data.agentPhoneNumber}</td>
                  <td>{data.userName}</td>
                  <td>{data.userPhoneNumber}</td>
                  <td>{data.UserType}</td>
                  <td>{data.feedback}</td>
                  <td>
                    <button
                      className="block"
                      onClick={() => {
                        this.confirmDelete(data.uid);
                      }}
                    >
                      Delete
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
export default AddRequest;
