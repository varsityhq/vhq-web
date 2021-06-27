import React, { Component } from "react";
import Logo from "../../assets/img/logo-small.png";
import { CgMenuMotion } from "react-icons/cg";
import { SiPluscodes } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

class TopBar extends Component {
  state = {};
  render() {
    return (
      <div className="v-top-nav-container ">
        <div className="v-top-nav d-flex align-items-center justify-content-between ti py-1 px-3">
          <div className="d-flex align-items-center justify-content-between">
            <div className="h2 mx-1 mb-0">
              <CgMenuMotion />
            </div>
            <img className="logo" src={Logo} alt="VHQ" />
            <div>
              <div className="bold h4 mb-0"></div>
            </div>
          </div>
          <div></div>
          <div className="d-flex align-items-center">
            <SiPluscodes className="h5 mr-3 mb-0" />
            <AiOutlineUsergroupAdd className="h3 mr-3 mb-0" />
            <IoSettingsOutline className="h3 mb-0" />
          </div>

          {/* <div className="page-name mb-0">University of Johannesburg</div> */}
        </div>
      </div>
    );
  }
}

export default TopBar;
