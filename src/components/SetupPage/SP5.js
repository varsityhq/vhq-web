import axios from "axios";
import React, { Component } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { connect } from "react-redux";
import { updateUniColl } from "../../store/actions/actions";
import UnisAndColleges from "../../util/UnisAndColleges.json";

const mapStateToProps = (state) => {
  return {
    core: state.core,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateUniColl: (n) => dispatch(updateUniColl(n)),
  };
};

class SP5 extends Component {
  state = {
    uniorcoll: "",
    error: true,
  };

  componentDidMount = () => {
    if (this.props.core.accData.university) {
      this.setState({
        uniorcoll: this.props.core.accData.university,
        error: false,
      });
    }
  };

  handleChange = (e) => {
    //
    this.setState({
      uniorcoll: e.target.value,
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
      .post("/account/update/university", {
        university: this.state.uniorcoll,
      })
      .then(() => {
        this.props.updateUniColl({
          university: this.state.uniorcoll,
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
          Education (1/2)
        </h6>
        <div>
          <div className="mt-4">
            <div className="bold">
              At which University/College do you study ?
            </div>
            <div className="mt-3">
              <select
                defaultValue={this.props.core.accData.university}
                onChange={this.handleChange}
                placeholder="University"
                className="form-control"
                name="uniorcoll"
              >
                <option value="">Select University or College</option>
                {UnisAndColleges.map((x, index) => (
                  <option value={x.name} key={index}>
                    {x.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-2 text-lb">
            Email support if you can't find your university
          </div>
          {this.state.error && (
            <div className="mt-3 v-error-o-s-u">
              *Please select your university to continue
            </div>
          )}
        </div>
        <div className="mt-5">
          <div className="button-row d-flex mt-4">
            {/* <button
              onClick={() => this.props.changePage("back")}
              className="btn btn-cancel"
              type="button"
            >
              <FaArrowLeft className="mr-2" /> Go back
            </button> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(SP5);
