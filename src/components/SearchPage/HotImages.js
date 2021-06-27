import React, { Component } from "react";
import TopImages from "../Common/TopImages";

export default class HotImages extends Component {
  render() {
    return (
      <div>
        <div className="bg-darkish v-rounded px-3 d-flex align-items-center py-3 mb-0 bold h5">
          Hot Images
        </div>
        <div className="mt-2">
          <div className="container-fluid">
            <div className="row p-">
              <div className="col-4">
                <TopImages />
              </div>
              <div className="col-4">
                <TopImages />
              </div>
              <div className="col-4">
                <TopImages />
              </div>
              <div className="col-4">
                <TopImages />
              </div>
              <div className="col-4">
                <TopImages />
              </div>
              <div className="col-4">
                <TopImages />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
