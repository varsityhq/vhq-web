import React, { Component } from "react";
import { CgChevronLeft } from "react-icons/cg";
import { FaEllipsisH, FaUniversity, FaUserEdit } from "react-icons/fa";
import { BsChatFill } from "react-icons/bs";
import { AiFillPushpin } from "react-icons/ai";
import TabsHeader from "../components/Common/TabsHeader";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Avatar from "../assets/img/avatar.png";
import Posts from "../components/Profile/Posts";

const mapStateToProps = (state) => {
  return {
    accData: state.core.accData,
  };
};

class UserProfile extends Component {
  state = {
    tabActive: "posts",
  };
  render() {
    return (
      <section className="v-user-ppage">
        <div className="v-header-section pt-4 pb-4">
          <div className="d-flex align-items-center px-2 mb-3 justify-content-between">
            <Link to="/">
              <CgChevronLeft className="bold h1 mb-0" />
            </Link>
            <div>
              <div className="v-user-pp">
                <img
                  className="img-fluid"
                  alt=""
                  src={
                    this.props.accData.profilepic
                      ? this.props.accData.profilepic
                      : Avatar
                  }
                />
              </div>
            </div>
            <div className="pr-3">
              <FaEllipsisH className="bold h4 mb-0" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="bold mb-0">{this.props.accData.firstname}</h3>
            <div className="px-2">
              <div className="text-light justify-content-center d-flex align-items-center">
                <FaUniversity className="mr-2" />{" "}
                {this.props.accData.university}
              </div>
              <div className="text-light text-center justify-content-center d-flex align-items-center">
                <AiFillPushpin className="mr-2" />{" "}
                {this.props.accData.yearOfStudy} Year,{" "}
                {this.props.accData.degree}
              </div>
            </div>
            <div className="border-top mx-4 my-2"> </div>
            <div className="">
              <p className="w-100 px-2 text-center m-aut">
                {this.props.accData.about}
              </p>
            </div>
            <div className="d-flex mt-2 justify-content-center">
              <Link
                to="/chat"
                className="btn badge-pill text-white px-3 ml-2 btn-v5"
              >
                <BsChatFill className="h5 mb-0 mr-1" /> Messages
              </Link>
              <Link
                to="/settings/profile"
                className="btn badge-pill text-white px-4 ml-2 btn-v5"
              >
                <FaUserEdit className="mr-1" /> Edit Profile
              </Link>
            </div>
            <div className="text-center mt-2">
              {this.props.accData.followers}{" "}
              <span className="text-lb">Friends</span> |{" "}
              {this.props.accData.following}{" "}
              <span className="text-lb">Following</span>
            </div>
          </div>
        </div>
        <div className="v-content-section ">
          <div className="mt-2 pt-3 p-2">
            <TabsHeader setTab={(n) => this.setState({ tabActive: n })} />
          </div>
          <div className="mt-2 mb-5 pb-5 p-1">
            {this.state.tabActive === "posts" && <Posts />}
          </div>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps, null)(UserProfile);
