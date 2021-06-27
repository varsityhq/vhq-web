import React, { Component } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { connect } from "react-redux";
import { Yosndegree } from "../../store/actions/actions";

import ImageEditMode from "../Common/ImageEditMode";

import ImageSelect from "../Common/ImageSelect";
import ImageHandler from "../Common/ImageHandler";
import TextEditor from "../Common/textEditor";

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

class SP7 extends Component {
  state = {
    imageUrl: "",
    croppedImage: "",
    imageEditMode: true,
    error: false,
  };

  handleImageChange = (n) => {
    this.setState({
      imageUrl: n,
    });
  };

  onClose = () => {};

  render() {
    console.log(this.state);

    return (
      <div className="px-3">
        {/* <ImageEditMode show={this.state.imageEditMode} onClose={this.onClose} /> */}

        <h6 className="bg-darkish bold text-center p-2 badge-pill">
          Complete Profile Setup (1/1)
        </h6>
        <div>
          <div className="mt-4 text-center">
            <ImageHandler imageUrl={(n) => this.handleImageChange(n)} />
          </div>
          <div className="mt-4">
            <div className="bold">Type your bio</div>
            <div className="mt-3">{/* <TextEditor className="w-100" /> */}</div>
          </div>
        </div>
        <div>
          <div className="mt-1 text-lb">You can change your bio later</div>
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
              Finish setup
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SP7);
