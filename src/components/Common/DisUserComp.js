import React, { Component } from "react";

export default class DisUserComp extends Component {
  render() {
    return (
      <div className="col-6 py-1 px-1">
        <div className="v-d-u-comp">
          <div className="v-d-u-footer p-2">
            <div className="d-flex  justify-content-between">
              <div>
                <div className="bg-darkish btn-sm badge-pill py-1 px-3 text-lb bold">
                  Harmony C
                </div>
              </div>
              <div></div>
            </div>
            <div className="mt-2">
              <ul>
                <li>2nd year</li>
                <li>Civil Engineering</li>
              </ul>
            </div>
          </div>
          <div className="v-d-u-grad"></div>
        </div>
      </div>
    );
  }
}
