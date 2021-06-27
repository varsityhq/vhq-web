import React, { Component } from "react";
import SetupPage1 from "../components/SetupPage/SP1";
import SetupPage3 from "../components/SetupPage/SP3";
import SetupPage5 from "../components/SetupPage/SP5";
import SetupPage6 from "../components/SetupPage/SP6";
import { connect } from "react-redux";
import { overlayLoader } from "../store/actions/actions";
import { BiChevronRight } from "react-icons/bi";
import Modal from "@material-ui/core/Modal";
import axios from "axios";

const mapStateToProps = (state) => {
  return {
    core: state.core,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    overlayLoader: (s) => dispatch(overlayLoader(s)),
  };
};

class SetupPage extends Component {
  state = {
    activePanel: 0,
    totalPages: 4,
    errorM: false,
  };

  componentDidMount = () => {
    if (this.props.core.accData.university) {
      this.setState({
        activePanel: 1,
      });
    }

    if (this.props.core.accData.degree && this.props.core.accData.yearOfStudy) {
      this.setState({
        activePanel: 2,
      });
    }

    if (this.props.core.accData.firstname && this.props.core.accData.surname) {
      this.setState({
        activePanel: 3,
      });
    }

    if (this.props.core.accData.gender) {
      this.setState({
        activePanel: 3,
      });
    }
  };

  changePage = (dir) => {
    if (dir === "next" && this.state.activePanel === 3) {
      alert("done");
    }

    if (dir === "next") {
      this.setState({
        activePanel: this.state.activePanel + 1,
      });
    } else {
      if (this.state.activePanel === 0) return;
      this.setState({
        activePanel: this.state.activePanel - 1,
      });
    }
  };

  finishSetup = () => {
    if (!this.props.core.accData.university) {
      return this.setState({
        activePanel: 0,
        errorM: true,
      });
    }

    if (
      !this.props.core.accData.degree &&
      this.props.core.accData.yearOfStudy
    ) {
      return this.setState({
        activePanel: 1,
        errorM: true,
      });
    }

    if (!this.props.core.accData.firstname && this.props.core.accData.surname) {
      return this.setState({
        activePanel: 2,
        errorM: true,
      });
    }

    if (!this.props.core.accData.gender) {
      return this.setState({
        activePanel: 3,
        errorM: true,
      });
    }

    this.props.overlayLoader(true);

    axios
      .get("/account/activate")
      .then(() => {
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  panelSwitcher = () => {
    switch (this.state.activePanel) {
      case 0:
        return <SetupPage5 changePage={(d) => this.changePage(d)} />;
      case 1:
        return <SetupPage6 changePage={(d) => this.changePage(d)} />;
      case 2:
        return <SetupPage1 changePage={(d) => this.changePage(d)} />;
      case 3:
        return (
          <SetupPage3
            finishSetup={this.finishSetup}
            changePage={(d) => this.changePage(d)}
          />
        );
    }
  };

  skip = () => {
    this.setState({
      activePanel: this.state.activePanel + 1,
    });
  };

  handleClose = () => {
    this.setState({
      errorM: false,
    });
  };
  render() {
    return (
      <div style={{ minHeight: window.innerHeight }} className="v-min-height">
        <Modal
          open={this.state.errorM}
          onClose={this.handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className="v-modal-paper p-3 text-center text-dark">
            <div style={{ fontSize: "20px" }} className="bold">
              Hold'on
            </div>
            <div className="pb-3">
              Before you complete this setup, please fill in all the fields.
            </div>
            <div className="d-flex justify-content-center w-100">
              <button
                onClick={this.handleClose}
                className="btn btn-v5 badge-pill px-4"
              >
                Okay, let me..
              </button>
            </div>
          </div>
        </Modal>

        <div className="v-header-section pt-4 pb-4">
          <div className="d-flex px-3 justify-content-between">
            <div></div>
            <div className="">
              {this.state.activePanel < this.state.totalPages - 1 && (
                <div onClick={this.skip} className="d-flex align-items-center">
                  Skip <BiChevronRight className="h2 mb-0" />
                </div>
              )}
            </div>
          </div>
          <header className="text-center py-5">
            <h1 className="mb-3">
              Hi,{" "}
              <span className="bold">{this.props.core.accData.username} !</span>
            </h1>
            <p className="w-75 text-center m-auto">
              Before we continue we just need a bit of information from you
            </p>
          </header>
        </div>
        <div className=" ">
          <div className=" v-content-section pt-4 ">
            <div className="">
              <div className="container overflow-hidden">
                <div className="">
                  <div className="row">
                    <div className="col-12 pb-5 col-lg-8 m-auto">
                      {this.panelSwitcher()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="v-fixed-bottom w-100">
          <div className="d-flex w-100  p-3 justify-content-between">
            <button id="f-btn-back" className="btn btn-cancel">
              Go back
            </button>

            <button
              type="button"
              title="Next"
              id="f-btn-next"
              className="btn  btn-v5 d-flex js-btn-next align-items-center px-5"
            >
              Save &amp; Continue <FaArrowRight className="text-lb ml-2" />
            </button>
          </div>
        </div> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetupPage);
