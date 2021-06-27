import axios from "axios";
import React, { Component } from "react";
import { AiFillFlag } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GiFinishLine } from "react-icons/gi";
import { connect } from "react-redux";
import { updateGender } from "../../store/actions/actions";
import ButtonSelectGroup from "../Common/ButtonSelectGroup";

const mapStateToProps = (state) => {
  return {
    core: state.core,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateGender: (n) => dispatch(updateGender(n)),
  };
};

class SP2 extends Component {
  state = {
    gender: "",
    error: true,
  };

  componentDidMount = () => {
    if (this.props.core.accData.gender && this.props.core.accData.gender) {
      this.setState({
        gender: this.props.core.accData.gender,
        error: false,
      });
    }
  };

  handleSave = () => {
    document.getElementById("btn-c").innerHTML = "Please wait...";
    document.getElementById("btn-c").disabled = true;
    axios
      .post("/account/update/gender", {
        gender: this.state.gender,
        age: this.state.age,
      })
      .then(() => {
        this.props.updateGender({
          gender: this.state.dob,
        });
        this.props.changePage("next");
      })
      .catch((err) => {
        console.log(err);
        document.getElementById("btn-c").innerHTML = "Try again";
        document.getElementById("btn-c").disabled = false;
      });
  };

  onBSChange = (n) => {
    this.setState({
      gender: n,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="px-3">
        <h6 className="bg-darkish bold text-center p-2 badge-pill">
          Personal information (2/2)
        </h6>
        <div>
          <div className="mt-4">
            <div className="bold">I'm a : </div>
            <div className="mt-3">
              <ButtonSelectGroup
                im="bs_o_su"
                options={["Male", "Female", "Trans/..", "Rather not say"]}
                selected={this.state.gender}
                onChangeFn={(n) => this.onBSChange(n)}
              />
            </div>
          </div>
        </div>
        <div>
          {!this.state.gender && (
            <div className="mt-3 v-error-o-s-u">
              *Select your gender to continue
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
              disabled={this.state.gender ? false : true}
              id="btn-c"
              onClick={this.props.finishSetup}
              className="btn btn-v5 ml-auto"
              type="button"
            >
              Finish Setup <AiFillFlag className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SP2);
