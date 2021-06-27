import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    core: state.core.accData,
  };
};

function ProfilePrefences({ core }) {
  const page = "/settings/profile/preferences";
  console.log(core);
  return (
    <div style={{ minHeight: window.innerHeight }} className="v-settings">
      <div className="v-header-section d-flex align-items-center d-flex py-3 p-2 bold h6">
        <Link
          to="/settings/profile"
          className="d-flex a-cancel text-white align-items-center"
        >
          <MdArrowBack className="h3 mb-0" />
          <span className="ml-3">Preferences</span>
        </Link>
      </div>

      <div className="v-p-m-l">
        <div className="bold px-3 py-2 text-lb">Basic Preferences</div>
        <Link
          to={page + "/gender"}
          className="selection-div align-items-center d-flex justify-content-between"
        >
          <div>
            <div className="bold">My Gender</div>
            <div className="text-lb">Male</div>
          </div>
          <div>
            <IoChevronForwardOutline />
          </div>
        </Link>
        <Link
          to={page + "/university"}
          className="selection-div align-items-center d-flex justify-content-between"
        >
          <div>
            <div className="bold">University</div>
            <div className="text-lb">{core.university}</div>
          </div>
          <div>
            <IoChevronForwardOutline />
          </div>
        </Link>
      </div>
      <div className="v-p-m-l mt-4">
        <div className="bold px-3 py-2 text-lb">Member Preferences</div>
        <div className="selection-div align-items-center d-flex justify-content-between">
          <div>
            <div className="bold">My Gender</div>
            <div className="text-lb">Male</div>
          </div>
          <div>
            <IoChevronForwardOutline />
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, null)(ProfilePrefences);
