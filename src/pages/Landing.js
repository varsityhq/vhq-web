import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Common/ml";
// import './login/style.css';
// import Logo from "../assets/img/logo-small.png";

class Landing extends Component {
  state = {};

  componentDidMount = () => {};

  render() {
    return (
      <div className="v-login">
        <div className="l-contnt pb-4 p-3">
          <div className="mb-2">
            <div className="logo"></div>
            <div>
              <h1 className="bold">
                Stay connected
                <br />
                and make new friends
              </h1>
            </div>
          </div>
          <div className="mb-3">
            Connect with over thousands of students all over South Africa and
            make new friends and stay updated with everything happening around
            you.
          </div>
          <div className="w-100">
            <Link to="/login">
              <button className="v-btn-1 mb-3 w-100 badge-pill">Log In</button>
            </Link>
            <Link to="/signup">
              <button className="v-btn-2 w-100 badge-pill">Sign up</button>
            </Link>
            <div className="d-flex justify-content-center">
              <div className="text-center c y pt-2 border-top w-100 mt-3">
                <span style={{ fontSize: "15px" }} className="text-white">
                  &#169;
                </span>{" "}
                Varsity Headquarters 2021
              </div>
            </div>
            <div className="text-center c  w-100 mt-0">
              <div
                style={{ fontSize: "11px" }}
                className="d-flex c  align-items-center justify-content-center"
              >
                <img
                  className="mr-1"
                  style={{ height: "12px" }}
                  src={Logo}
                  alt=""
                />{" "}
                | Mallorar Technologies
              </div>
            </div>
          </div>
        </div>
        <div className="s-c-over"></div>
      </div>
    );
  }
}

export default Landing;
