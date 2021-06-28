import React, { Component } from "react";
import { BiWorld } from "react-icons/bi";
import { FaUserLock, FaGraduationCap } from "react-icons/fa";
import { BsFillLockFill } from "react-icons/bs";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Avatar from "../../assets/img/avatar.png";

const mapStateToProps = (state) => {
  return {
    core: state.core.accData,
  };
};

class PostTarget extends Component {
  state = {};
  render() {
    return (
      <div className="v-postTarget p-2 border-bottom pb-3">
        <div className="d-flex align-items-center">
          <div className="mr-2">
            <div className="v-post-user-pp">
              <img
                src={
                  this.props.core.profilepic ? this.props.core.profilepic : Avatar
                }
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="bold text-white mb-1">
              {this.props.core.firstname}&nbsp;{this.props.core.surname}
            </div>
            <div className="d-flex w-100 overflow-auto">
              <Link
                to="/settings/posts/audience"
                className="btn btn-sm d-flex align-items-center btn-v4 border text-light mr-2"
              >
                {this.props.core.postAudience === "public" && (
                  <>
                    {" "}
                    <BiWorld className="mr-1" />
                    Public
                  </>
                )}
                {this.props.core.postAudience === "friends" && (
                  <>
                    {" "}
                    <FaUserLock className="mr-1" />
                    Friends
                  </>
                )}
                {this.props.core.postAudience === "only-me" && (
                  <>
                    {" "}
                    <BsFillLockFill className="mr-1" />
                    Only Me
                  </>
                )}
              </Link>
              <Link
                to="/settings/profile/preferences/university?redirect_to=/add"
                className="btn btn-sm d-flex align-items-center btn-v4 border text-light mr-2"
              >
                <FaGraduationCap className="mr-1" />
                {this.props.core.university}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(PostTarget);
