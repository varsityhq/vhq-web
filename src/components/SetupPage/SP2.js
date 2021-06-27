import axios from "axios";
import React, { Component } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { connect } from "react-redux";
import { updateDOB } from "../../store/actions/actions";

const mapStateToProps = (state) => {
  return {
    core: state.core,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateDOB: (n) => dispatch(updateDOB(n)),
  };
};

class SP2 extends Component {
  state = {
    dob: "",
    age: null,
    error: true,
  };

  componentDidMount = () => {
    if (this.props.core.accData.age && this.props.core.accData.dob) {
      this.setState({
        dob: this.props.core.accData.dob,
        age: this.props.core.accData.age,
        error: false,
      });
    }
  };

  handleChange = (e) => {
    //
    this.setState({
      dob: e.target.value,
    });

    const date1 = new Date(e.target.value);
    const date2 = new Date();
    const years = Math.floor(this.getDifferenceInDays(date1, date2) / 365);

    if (years <= 17) {
      this.setState({
        error: true,
      });
    } else {
      this.setState({
        error: false,
        age: years,
      });
    }
  };

  getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  }

  handleSave = () => {
    document.getElementById("btn-c").innerHTML = "Please wait...";
    document.getElementById("btn-c").disabled = true;
    axios
      .post("/account/update/dob", {
        dob: this.state.dob,
        age: this.state.age,
      })
      .then(() => {
        this.props.updateDOB({
          dob: this.state.dob,
          age: this.state.age,
        });
        this.props.changePage("next");
      })
      .catch((err) => {
        console.log(err);
        document.getElementById("btn-c").innerHTML = "Try again";
        document.getElementById("btn-c").disabled = false;
      });
  };

  render() {
    console.log(this.state);
    return (
      <div className="px-3">
        <h6 className="bg-darkish bold text-center p-2 badge-pill">
          Personal information (2/4)
        </h6>
        <div>
          <div className="mt-4">
            <div className="bold">When is your birthday</div>
            <div className="mt-2">
              <input
                defaultValue={this.props.core.accData.dob}
                onChange={this.handleChange}
                type="date"
                placeholder="First Name"
                className="form-control"
                name="firstname"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-2 text-lb">Your birthday will be kept private</div>
          {this.state.error && (
            <div className="mt-3 v-error-o-s-u">
              *Your age has to fall between 17-30 years
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

export default connect(mapStateToProps, mapDispatchToProps)(SP2);
