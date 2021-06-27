import React, { Component } from "react";
import { MdArrowBack } from "react-icons/md";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setUniColl } from "../../store/actions/actions";
import UnisAndColleges from "../../util/UnisAndColleges.json";

const mapStateToProps = (state) => {
  return {
    university: state.core.accData.university,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUniColl: (n) => dispatch(setUniColl(n)),
  };
};

class SetUniversity extends Component {
  state = {
    redirectTo: null,
    selected: this.props.university,
  };
  componentDidMount = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const q = urlParams.get("redirect_to");
    this.setState({
      redirectTo: q,
    });
  };

  updateUniColl = () => {
    this.props.setUniColl(this.state.selected);
  };

  handleChange = (e) => {
    this.setState({
      selected: e.target.value,
    });
  };
  render() {
    return (
      <div style={{ minHeight: window.innerHeight }} className="v-settings">
        <div className="v-header-section justify-content-between d-flex align-items-center d-flex py-3 p-2 bold h6">
          <Link
            to={
              this.state.redirectTo
                ? this.state.redirectTo
                : "/settings/profile"
            }
            className="d-flex a-cancel text-white align-items-center"
          >
            <MdArrowBack className="h3 mb-0" />
            <span className="ml-3">University / College</span>
          </Link>
          <Link
            onClick={this.updateUniColl}
            to={
              this.state.redirectTo
                ? this.state.redirectTo
                : "/settings/profile/preferences"
            }
            className="d-flex a-cancel px-3 text-white align-items-center"
          >
            <span className="ml-3">Save Changes</span>
          </Link>
        </div>
        <div className="p-3">
          <div className="py-2">
            Where are you currently doing your studies ?
          </div>
          <select
            defaultValue={this.props.university}
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
          <div style={{ fontSize: "14px" }} className="py-2 mt-3 text-lb">
            <span className="bold">NOTE : </span> Your posts will be visible to
            people at your university only
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetUniversity);
