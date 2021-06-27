import axios from "axios";
import React, { Component } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { connect } from "react-redux";
import { updatePinfor } from "../../store/actions/actions";

const mapStateToProps = (state) => {
  return {
    core: state.core,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updatePinfor: (n) => dispatch(updatePinfor(n)),
  };
};

class SP1 extends Component {
  state = {
    saved: false,
    firstname: "",
    surname: "",
    error: true,
  };

  componentDidMount = () => {
    if (this.props.core.accData.firstname && this.props.core.accData.surname) {
      this.setState({
        firstname: this.props.core.accData.firstname,
        surname: this.props.core.accData.surname,
        error: false,
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    if (this.state.firstname.length > 3 && this.state.surname.length > 3) {
      this.setState({
        error: false,
      });
    } else {
      this.setState({
        error: true,
      });
    }
  };

  handleSave = () => {
    document.getElementById("btn-c").innerHTML = "Please wait...";
    document.getElementById("btn-c").disabled = true;
    axios
      .post("/account/update/pinfo", {
        firstname: this.state.firstname,
        surname: this.state.surname,
      })
      .then(() => {
        this.props.updatePinfor({
          firstname: this.state.firstname,
          surname: this.state.surname,
        });
        this.props.changePage("next");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="px-3">
        <h6 className="bg-darkish bold text-center p-2 badge-pill">
          Personal information (1/2)
        </h6>
        <div>
          <div className="mt-4">
            <div className="bold">First Name</div>
            <div className="mt-2">
              <input
                defaultValue={this.props.core.accData.firstname}
                onChange={this.handleChange}
                type="text"
                placeholder="First Name"
                className="form-control"
                name="firstname"
              />
            </div>
          </div>
          <div className="mt-3">
            <div className="bold">Last Name</div>
            <div className="mt-2">
              <input
                defaultValue={this.props.core.accData.surname}
                onChange={this.handleChange}
                type="text"
                placeholder="Last Name"
                className="form-control"
                name="surname"
              />
            </div>
          </div>
        </div>
        <div>
          {this.state.error && (
            <div className="mt-3 v-error-o-s-u">
              *Firstname and surname must have 3-25 characters
            </div>
          )}
        </div>
        <div className="mt-5">
          <div className="button-row d-flex mt-4">
            <button
              onClick={() => this.props.changePage("back")}
              className="btn btn-cancel"
              type="button"
            >
              <FaArrowLeft className="mr-2" /> Go back
            </button>
            <button
              disabled={this.state.error}
              id="btn-c"
              onClick={this.handleSave}
              className="btn btn-v5 ml-auto"
              type="button"
            >
              Save &amp; Continue <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SP1);
