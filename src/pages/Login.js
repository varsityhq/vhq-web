import React, { Component } from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";
import store from "../store/store";
import { userCreated } from "../store/actions/actions";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {},
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();

    document.getElementById("v-signin").disabled = true;
    document.getElementById("v-signin").innerHTML = "Logging in..";

    let userAuthDetails = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("/login", userAuthDetails)
      .then((res) => {
        // console.log(res.data);

        store.dispatch(userCreated(res.data));
        document.getElementById("v-signin").disabled = false;
        document.getElementById("v-signin").innerHTML = "Login";
      })
      .catch((err) => {
        document.getElementById("v-signin").disabled = false;
        document.getElementById("v-signin").innerHTML = "Try Again";

        console.log(err.response.data);

        this.setState({
          errors: { ...err.response.data },
        });
      });
  };
  render() {
    return (
      <div className="v-signup">
        <div className="l-contnt pb-4 p-3">
          <div className="my-4">
            <div className="text-white">
              <Link to="/">
                <IoArrowBackSharp className="top-icon" />
              </Link>
            </div>
            <div className="position-relative">
              <h1 className="bold mb-2">Welcome back</h1>
              <p>Login to your account</p>
              {this.state.errors.error && (
                <div className="v-error-o-s-i">{this.state.errors.error}</div>
              )}
              {this.state.errors.password && (
                <div className="v-error-o-s-i ">
                  {this.state.errors.password}
                </div>
              )}
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

                <div className="form mt-5 ">
                  <form onSubmit={this.handleFormSubmit} action="">
                    <div className="inputBx">
                      <input
                        onChange={this.onChange}
                        name="email"
                        type="text"
                        placeholder="Email, Username or Phonenumber"
                        required="required"
                      />
                      {/* <span>Email, Username or Phonenumber</span> */}
                      <FaUserAlt />
                    </div>
                    <div class="inputBx password">
                      <input
                        onChange={this.onChange}
                        type="password"
                        name="password"
                        placeholder="Password"
                        required="required"
                      />

                      <FaLock />
                    </div>
                    <button
                      id="v-signin"
                      type="submit"
                      className="v-btn-2 mt-5 w-100 badge-pill"
                    >
                      Login
                    </button>
                  </form>
                  <div className="mt-4">
                    <p className="mb-2">
                      Forgot password? <a href="/reset-pass">Click Here</a>
                    </p>
                    <p>
                      Don't have an account <Link to="/signup">Sign up</Link>
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

export default Login;
