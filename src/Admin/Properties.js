import React, { Component } from "react";
import firebase from "../config/firebaseConfig";

var db = firebase.firestore();

class Properties extends Component {
  state = {
    query: "",
    user: [],
    data: [],
  };

  search = async () => {
    if (this.state.data != null) {
      this.setState({
        ...this.state,
        data: [],
      });
    }
    await db
      .collection("users")
      .where("phoneNumber", "==", this.state.query)
      .get()
      .then((querySnapshot) => {
        let user = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          let data = doc.data();
          user.push(data.uid);
          user.push(data.displayName);
          user.push(data.phoneNumber);
        });
        this.setState({
          ...this.state,
          user: user,
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    if (this.state.user[0] != null) {
      await db
        .collection("PostAdd")
        .where("uid", "==", this.state.user[0])
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
  };
  handelChange = (e) => {
    this.setState({
      ...this.state,
      query: e.target.value,
    });
  };
  render() {
    return (
      <div className="agent-request">
        <h1>Search A Property</h1>
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
              <th>Owner Name</th>
              <th>Phone No</th>
              <th>Title</th>
              <th>Type</th>
              <th>Price</th>
              <th>Longitude</th>
              <th>latitude</th>
              <th>purpose</th>
              <th>size</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((property) => {
              return (
                <tr key={property.PostID}>
                  <td>{this.state.user[1]}</td>
                  <td>{this.state.user[2]}</td>
                  <td>{property.Title}</td>
                  <td>{property.PropertyType}</td>
                  <td>{property.Price}</td>
                  <td>{property.Location.longitude}</td>
                  <td>{property.Location.latitude}</td>
                  <td>{property.Purpose}</td>
                  <td>{property.PropertySize}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Properties;
