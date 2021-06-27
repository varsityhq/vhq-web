import React, { Component } from "react";
import { FaUserLock, FaGraduationCap, FaUser } from "react-icons/fa";

class PostTarget extends Component {
  state = {};
  render() {
    return (
      <div className="v-postTarget p-2 border-bottom pb-3">
        <div className="d-flex align-items-center">
          <div className="mr-2">
            <div className="v-post-user-pp d-flex justify-content-center align-items-center">
              <FaUser />
            </div>
          </div>
          <div>
            <div className="bold text-white mb-1">Brendon C</div>
            <div className="d-flex w-100 overflow-auto">
              <button className="btn btn-sm d-flex align-items-center btn-v4 border text-light mr-2">
                <FaUserLock className="mr-1" />
                Friends
              </button>
              <button className="btn btn-sm d-flex align-items-center btn-v4 border text-light mr-2">
                <FaGraduationCap className="mr-1" />
                University of Pretoria
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostTarget;
