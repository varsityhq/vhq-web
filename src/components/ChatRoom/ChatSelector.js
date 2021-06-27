import React, { Component } from "react";

export default class ChatSelector extends Component {
  render() {
    return (
      <div className="d-flex v-chat-selector mt-3 pl-2 pr-3 align-items-center">
        <div className="mr-2">
          <div className="position-relative v-c-user-avatar">
            <img
              alt=""
              className="pp"
              src="https://i2-prod.dailyrecord.co.uk/incoming/article20793986.ece/ALTERNATES/s1200c/0_England-v-South-Africa-Rugby-World-Cup-2019-Final.jpg"
            />
            <span className="v-u-status online"></span>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between w-100">
          <div style={{ lineHeight: "24px" }}>
            <div>
              <span className="bold mr-1">Harmony</span>
              <span className="text-lb bold">&#8226;</span>{" "}
              <span className="v-c-time-stamp">2 min ago</span>
            </div>
            <div className="text-lg">Are you done ?</div>
          </div>
          <div>
            <span className="chat-indicator-unread" />
          </div>
        </div>
      </div>
    );
  }
}
