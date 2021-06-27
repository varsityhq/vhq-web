import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";

class CreateNewStory extends Component {
  state = {};
  render() {
    return (
      <div className="position-relative v-story-button">
        <div className="main-area">
          <img
            alt=""
            className="img-fluid cr"
            src="https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-9/146431241_1131405963996762_946846059452846120_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=4SIo4liPuLIAX_MALx0&_nc_ht=scontent-jnb1-1.xx&oh=958546a486ceec8419d87a3e95185495&oe=60D5B21E"
          />
        </div>
        <div className="s-footer justify-content-center d-flex position-absolute">
          <div className="d-flex plus align-items-center w-100 justify-content-center">
            <FaPlus />
          </div>
        </div>
        <div className="d-flex justify-content-center v-story-cs-oa">
          Create Story
        </div>
      </div>
    );
  }
}

export default CreateNewStory;
