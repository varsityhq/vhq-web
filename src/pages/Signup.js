import axios from "axios";
import React, { Component } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userCreated } from "../store/actions/actions";
import store from "../store/store";
// import './login/style.css';
// import Logo from "../assets/img/logo-small.png";

const mapDispatchToProps = (dispatch) => {
  return {
    userCreated: (data) => dispatch(userCreated(data)),
  };
};

class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    rep_password: "",
    errors: {},
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    document.getElementById("v-signup").disabled = true;
    document.getElementById("v-signup").innerHTML = "Signing up..";

    let newUserData = {
      username: this.state.username, // must run regex for correct pattern
      email: this.state.email,
      password: this.state.password,
      rep_password: this.state.rep_password,
    };

    axios
      .post("/signup", newUserData)
      .then((res) => {
        store.dispatch(userCreated(res.data));
        document.getElementById("v-signup").disabled = false;
      })
      .catch((err) => {
        document.getElementById("v-signup").disabled = false;
        document.getElementById("v-signup").innerHTML = "Try Again";

        this.setState({
          errors: { ...err.response.data },
        });
      });
  };

  render() {
    console.log(this.state);
    return (
      <div className="v-signup w2">
        <div className="l-contnt pb-4 p-3">
          <div className="my-4">
            <div className="text-white">
              <Link to="/">
                <IoArrowBackSharp className="top-icon" />
              </Link>
            </div>
            <div>
              <h1 className="bold mb-2">Create an account</h1>
              <p>Join VarsityHQ and start connecting</p>
            </div>
          </div>

          <div className="w-100">
            <div>
              <div className="box">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>

                <div className="form mt-5">
                  <form
                    autoComplete="new-password"
                    onSubmit={this.handleFormSubmit}
                    action="/"
                  >
                    <div className="inputBx">
                      <input
                        onChange={this.onChange}
                        name="username"
                        type="text"
                        autoComplete="new-password"
                      />
                      <span>Username</span>
                      <FaUser />
                      {this.state.errors.username && (
                        <div className="v-txt-warning">
                          {this.state.errors.username}
                        </div>
                      )}
                    </div>

                    <div className="inputBx">
                      <input
                        onChange={this.onChange}
                        name="email"
                        type="email"
                        autoComplete="new-password"
                      />
                      <span>Email*</span>
                      <FaEnvelope />
                      {this.state.errors.email && (
                        <div className="v-txt-warning">
                          {this.state.errors.email}
                        </div>
                      )}
                    </div>
                    <div className="inputBx password">
                      <input
                        onChange={this.onChange}
                        type="password"
                        name="password"
                        autoComplete="new-password"
                      />
                      <span>Password</span>
                      <FaLock />
                      {this.state.errors.password && (
                        <div className="v-txt-warning">
                          {this.state.errors.password}
                        </div>
                      )}
                    </div>
                    <div className="inputBx password">
                      <input
                        onChange={this.onChange}
                        type="password"
                        name="rep_password"
                        autoComplete="new-password"
                      />
                      <span>Repeat Password</span>
                      <FaLock />
                      {this.state.errors.password && (
                        <div className="v-txt-warning">
                          {this.state.errors.password}
                        </div>
                      )}
                    </div>
                    <button
                      id="v-signup"
                      type="submit"
                      className="v-btn-2 mt-5 w-100 badge-pill"
                    >
                      Signup
                    </button>
                  </form>
                  <div className="mt-4">
                    <p className="mb-2">
                      Already have an account ?{" "}
                      <Link to="/login">Login here</Link>
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-center py-2 ts">
                      By clicking signup you agree to our terms and conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="s-c-over"></div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Signup);
