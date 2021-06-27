import React, { Component } from "react";
import PostTarget from "../components/Post/PostTarget";
import AddPostStuff from "../components/Post/AddPostStuff";
import AddPostContent from "../components/Post/AddPostContent";
import { connect } from "react-redux";
import { footerEnabled } from "../store/actions/actions";
import { Link } from "react-router-dom";
import { IoPushOutline } from "react-icons/io5";

const mapDispatchToProps = (dispatch) => {
  return {
    footerEnabled: (state) => dispatch(footerEnabled(state)),
  };
};

class AddPost extends Component {
  state = {};

  componentDidMount = () => {
    this.props.footerEnabled(false);
  };

  componentWillUnmount = () => {
    this.props.footerEnabled(true);
  };

  render() {
    return (
      <section
        style={{ height: window.innerHeight }}
        className="v-post-add-page"
      >
        <div className="d-flex v-bb p-2 justify-content-between align-items-center">
          <div>
            <Link to="/">
              <button className="btn btn-danger bold text-white">Cancel</button>
            </Link>
          </div>
          <div className="bold">Create Post</div>
          <div>
            <button className="btn btn-v5 text-light d-flex align-items-center bold">
            <IoPushOutline className="mr-1 text-light"/>
              Post</button>
          </div>
        </div>
 
        <section>
          <PostTarget />
          <AddPostContent />
        </section>
        <div className="p-2 v-addpost-footer v-bt">
          <AddPostStuff />
        </div>
      </section>
    );
  }
}

export default connect(null, mapDispatchToProps)(AddPost);
