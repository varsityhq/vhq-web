import axios from "axios";
import React, { Component } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { connect } from "react-redux";
import { updateSOrientation } from "../../store/actions/actions";
import ButtonSelectGroup from "../Common/ButtonSelectGroup";

const mapStateToProps = (state) => {
  return {
    core: state.core,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateSOrientation: (n) => dispatch(updateSOrientation(n)),
  };
};

class SP4 extends Component {
  state = {
    show_sorientation: false,
    s_orientation: "",
    error: true,
  };

  componentDidMount = () => {
    if (this.props.core.accData.s_orientation) {
      this.setState({
        s_orientation: this.props.core.accData.s_orientation,
        show_sorientation: this.props.core.accData.show_sorientation,
        error: false,
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      show_sorientation: e.target.checked,
    });
  };

  handleSave = () => {
    document.getElementById("btn-c").innerHTML = "Please wait...";
    document.getElementById("btn-c").disabled = true;
    axios
      .post("/account/update/sexualori", {
        show_sorientation: this.state.show_sorientation,
        s_orientation: this.state.s_orientation,
      })
      .then(() => {
        this.props.updateSOrientation({
          show_sorientation: this.state.show_sorientation,
          s_orientation: this.state.s_orientation,
        });
        this.props.changePage("next");
      })
      .catch((err) => {
        console.log(err);
        document.getElementById("btn-c").innerHTML = "Try again";
        document.getElementById("btn-c").disabled = false;
      });
  };

  onSOChange = (n) => {
    this.setState({
      s_orientation: n,
      error: false,
    });
  };

  render() {
    return (
      <div className="px-3">
        <h6 className="bg-darkish bold text-center p-2 badge-pill">
          Personal information (4/4)
        </h6>
        <div>
          <div className="mt-4">
            <div className="bold">What's your sexual orientation</div>
            <div className="mt-3">
              <ButtonSelectGroup
                im="so_o_po"
                options={["Straight", "Gay", "Lesbian", "Bisexual"]}
                selected={this.state.s_orientation}
                onChangeFn={(n) => this.onSOChange(n)}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-4 text-lb">
            <div className="v-checkbox">
              <input
                defaultChecked={this.props.core.accData.show_sorientation}
                onChange={this.handleChange}
                type="checkbox"
                id="box-somp"
              />
              <label htmlFor="box-somp">Show on my profile</label>
            </div>
          </div>
          {this.state.error && (
            <div className="mt-3 v-error-o-s-u">
              *Please select your sexual orientation
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

export default connect(mapStateToProps, mapDispatchToProps)(SP4);
