import React, { Component } from "react";
import { connect } from "react-redux";
import { createHospital } from "../store/actions/placesActions";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import mapboxgl from "mapbox-gl";

import UserContext from "../UserContext";
import firebase from "../config/firebaseConfig";

var db = firebase.firestore();

mapboxgl.accessToken =
  "pk.eyJ1IjoiZmFyYXozMiIsImEiOiJja2pxdTh3aG0za2I4MnpvN2U0dzl5aG4zIn0.bDKSQRoOt3YT8BkG1E-D_Q";

class AddHospital extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      lng: 73.03605097,
      lat: 33.69056107,
      zoom: 12,
      map: 1,
      maps: 1,
      addHospital: false,
      addhospital: {
        name: "",
        Location: "",
      },
      data: [],
    };
  }
  refresh = async () => {
    await db
      .collection("hospital")
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
  componentDidMount = async () => {
    const place = this.context;
    console.log(place);

    await db
      .collection("hospital")
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
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [73.03605097, 33.69056107],
      zoom: this.state.zoom,
    });

    map.on("move", () => {
      this.setState({
        ...this.state,

        lng: map.getCenter().lng.toFixed(8),
        lat: map.getCenter().lat.toFixed(8),
        zoom: map.getZoom().toFixed(2),
      });
      console.log(this.state);
    });
    this.state.data.map((school) => {
      return new mapboxgl.Marker({ scale: 0.5 })
        .setLngLat([school.Location.longitude, school.Location.latitude])
        .addTo(map);
    });
    var marker = new mapboxgl.Marker({
      draggable: true,
      color: "red",
    })
      .setLngLat([this.state.lng, this.state.lat])
      .addTo(map);
    this.setState({
      ...this.state,
      map: marker,
      maps: map,
    });
    marker.getElement().addEventListener("click", () => {
      this.setState({
        ...this.state,
        addHospital: true,
      });
    });
    marker.on("dragend", this.onDragEnd);
  };
  onDragEnd = () => {
    var lngLat = this.state.map.getLngLat();

    var preState = { ...this.state };
    var preState = { ...this.state };
    preState.addhospital.Location = new firebase.firestore.GeoPoint(
      lngLat.lat,
      lngLat.lng
    );
    this.setState({ preState });
    console.log(this.state.addhospital);
  };
  postData = async () => {
    this.setState({
      ...this.state,
      addHospital: false,
    });
    await this.refresh();
    this.state.data.map((school) => {
      return new mapboxgl.Marker({
        scale: 0.5,
      })
        .setLngLat([school.Location.longitude, school.Location.latitude])
        .addTo(this.state.maps);
    });
  };

  addPark = async () => {
    await this.props.createHospital(this.state.addhospital);
    this.postData();
  };
  handelChange = (e) => {
    var preState = { ...this.state };
    preState.addhospital.name = e.target.value;
    this.setState({ preState });
  };
  render() {
    return (
      <div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
        {this.state.addHospital ? (
          <div className="add-data">
            <span onClick={this.postData}>x</span>
            <h2 className="text">Write Hospital Name:</h2>
            <div>
              <input
                type="text"
                onChange={this.handelChange}
                autofocus="true"
              ></input>
              <button onClick={this.addPark}>Post</button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createHospital: (hospital) => dispatch(createHospital(hospital)),
  };
};
export default compose(
  connect(null, mapDispatchToProps),
  firestoreConnect([{ collection: "hospital" }])
)(AddHospital);
