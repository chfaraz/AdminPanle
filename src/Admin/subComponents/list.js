import React from "react";

const list = (props) => {
  return (
    <div className="list-wrapper">
      <div className="list-page">
        <div className="list-item">
          <div>
            <img alt="profile" className="avatar-img" />
          </div>
          <div>
            <h2>{props.name}</h2>
            <p>{props.price}</p>
          </div>
          <span>{props.star}</span>
        </div>
      </div>
    </div>
  );
};
export default list;
