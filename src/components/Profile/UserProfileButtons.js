import React, { Component } from "react";

class UserProfileButtons extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex justify-content-center">
        <button className="btn1 col-4 btn rounded- badge-pill">
          Edit Profile
        </button>
        <button className="btn1 mx-2 col-4 btn badge-pill ">Messages</button>
        <button className="btn1 col-4 btn badge-pill active">Settings</button>
      </div>
    );
  }
}

export default UserProfileButtons;
