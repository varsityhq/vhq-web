import React, { Component } from "react";
import { BsList } from "react-icons/bs";
import { MdExplore } from "react-icons/md";
import { Link } from "react-router-dom";
import Stories from "../components/Stories/stories";
import DisUserComp from "../components/Common/DisUserComp";

export default class Discover extends Component {
  render() {
    return (
      <section>
        <div className="v-header-section pt-4 pb-4">
          <div className="text-center">
            <h1 className="bold v-vhq-name mb-0">VarsityHQ</h1>
            <div className="text-lb">University of Johannesburg</div>
          </div>
          <div className="px-2 mb-1 mt-3 d-flex justify-content-center">
            <Link
              to="/"
              className="btn d-flex align-items-center px-4 mr-1 btn-v5  bold badge-pill"
            >
              <BsList className="text-dark mr-1" /> Timeline
            </Link>
            <Link
              to="/discover"
              className="btn d-flex align-items-center px-4 ml-1 btn-light bold badge-pill"
            >
              <MdExplore className="text-lb mr-1" />
              Discover
            </Link>
          </div>
          <div>
            <Stories />
          </div>
        </div>
        <div className="v-content-section pt-2 ">
          <div className="container-fluid">
            <div className="row px-2">
              <DisUserComp />
              <DisUserComp />
              <DisUserComp />
              <DisUserComp />
              <DisUserComp />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
