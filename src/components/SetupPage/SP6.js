import axios from "axios";
import React, { Component } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { connect } from "react-redux";
import { Yosndegree } from "../../store/actions/actions";

const mapStateToProps = (state) => {
  return {
    core: state.core,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Yosndegree: (n) => dispatch(Yosndegree(n)),
  };
};

class SP6 extends Component {
  state = {
    degree: "",
    yearOfStudy: "",
    error: true,
  };

  componentDidMount = () => {
    if (this.props.core.accData.degree && this.props.core.accData.yearOfStudy) {
      this.setState({
        degree: this.props.core.accData.degree,
        yearOfStudy: this.props.core.accData.yearOfStudy,
        error: false,
      });
    }
  };

  handleChange = (e) => {
    //
    this.setState({
      [e.target.name]: e.target.value,
    });

    if (!e.target.value) {
      this.setState({
        error: true,
      });
    } else {
      this.setState({
        error: false,
      });
    }
  };

  handleSave = () => {
    document.getElementById("btn-c").innerHTML = "Please wait...";
    document.getElementById("btn-c").disabled = true;
    axios
      .post("/account/update/yosndegree", {
        degree: this.state.degree,
        yearOfStudy: this.state.yearOfStudy,
      })
      .then(() => {
        this.props.Yosndegree({
          degree: this.state.degree,
          yearOfStudy: this.state.yearOfStudy,
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
          Education (2/2)
        </h6>
        <div>
          <div className="mt-4">
            <div className="bold">Which degree are you studying for</div>
            <div className="mt-3">
              <input
                defaultValue={this.props.core.accData.degree}
                onChange={this.handleChange}
                placeholder="example : Bachelor of Accounting"
                className="form-control"
                name="degree"
              />
            </div>
          </div>
          <div className="mt-3">
            <div className="bold">Year of current study</div>
            <div className="mt-3">
              <select
                defaultValue={this.props.core.accData.yearOfStudy}
                onChange={this.handleChange}
                placeholder="University"
                className="form-control"
                name="yearOfStudy"
              >
                <option value="">Select Year of study</option>
                <option value="1st">First year</option>
                <option value="2nd">Second year</option>
                <option value="3rd">Third year</option>
                <option value="4th">Fourth year</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-2 text-lb">
            Email support if you can't find your relavent year of study
          </div>
          {this.state.error && (
            <div className="mt-3 v-error-o-s-u">
              *Please complete all fields
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

export default connect(mapStateToProps, mapDispatchToProps)(SP6);
