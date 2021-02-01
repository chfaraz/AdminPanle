import React, { Component } from "react";
import List from "./list";

class AgentHomePage extends Component {
  state = {
    data: [
      {
        id: 1,
        name: "5 marla house",
        price: 2300000,
      },
      {
        id: 2,
        name: "New Shop of 10 x 15",
        price: 5600000,
      },
      {
        id: 3,
        name: "WareHouse",
        price: 6300000,
      },
      {
        id: 4,
        name: "5 marla house",
        price: 8800000,
      },
    ],
  };

  render() {
    return (
      <div className="agent-home-page">
        <div className="profile-info">
          <div className="profile-info-card">
            <img />
            <div>
              <h2>Ch Faraz Ahmed</h2>
              <p>
                hi i am a profetional property dealer contact if you wana buy or
                sell property
              </p>
              <h3>Address:</h3>
              <p>house no 241 B sector g 15/3 Islamabad</p>
              <h3>Phone No:</h3>
              <p>03365565665</p>
              <div>
                <div>
                  <p>Sold:</p>
                  <p>23</p>
                </div>
                <div>
                  <p>Current:</p>
                  <p>3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="listing">
          <h2>LISTINGS</h2>
          <div className="listing-wrapper">
            {this.state.data.map((data) => {
              return <List key={data.id} name={data.name} price={data.price} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default AgentHomePage;
