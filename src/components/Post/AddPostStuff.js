import React, { Component } from "react";
import { IoImage } from "react-icons/io5";
import { AiOutlineGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { BiPurchaseTag } from "react-icons/bi";

class AddPostStuff extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <button className="btn mr-2 btn-v2 text-blue d-flex justify-content-center align-items-center">
            <IoImage />
          </button>
          <button className="btn btn-v2 mr-2 text-blue d-flex justify-content-center align-items-center">
            <AiOutlineGif />
          </button>

          <button className="btn btn-v2 text-blue d-flex justify-content-center align-items-center">
            <BiPurchaseTag />
          </button>
        </div>
        <div>
          <button
            disabled
            className="btn btn-v2 text-blue d-flex justify-content-center align-items-center"
          >
            <BiPoll />
          </button>
        </div>
      </div>
    );
  }
}

export default AddPostStuff;
