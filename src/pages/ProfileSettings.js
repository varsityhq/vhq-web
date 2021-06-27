import React, { Component } from "react";
import { MdArrowBack } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { FaUsersCog, FaRegQuestionCircle } from "react-icons/fa";
import ProfilePicChange from "../components/Settings/ProfilePicChange";
import { Link } from "react-router-dom";

export default class ProfileSettings extends Component {
  render() {
    return (
      <div style={{ minHeight: window.innerHeight }} className="v-settings">
        <div className="v-header-section d-flex align-items-center d-flex py-3 p-2 bold h6">
          <Link to="/profile" className="d-flex align-items-center">
            <MdArrowBack className="h3 mb-0" />
            <span className="ml-3">Update profile</span>
          </Link>
        </div>
        <div className="pb-3">
          <ProfilePicChange />
        </div>
        <div className="v-p-m">
          <div className="selection-div align-items-center d-flex justify-content-between">
            <div>
              <div className="bold">Preferences</div>
              <div>Set your basic and member preferences</div>
            </div>
            <div>
              <VscSettings />
            </div>
          </div>
          <div className="selection-div align-items-center d-flex justify-content-between">
            <div>
              <div className="bold">Account</div>
              <div>Manage your account and profile settings</div>
            </div>
            <div>
              <FaUsersCog />
            </div>
          </div>
          <div className="selection-div align-items-center d-flex justify-content-between">
            <div>
              <div className="bold">About</div>
              <div>Learn more about Varsity Headquarters and Licences</div>
            </div>
            <div>
              <FaRegQuestionCircle />
            </div>
          </div>

          {/* <div className="selection-div">Help Center</div> */}
        </div>
      </div>
    );
  }
}
