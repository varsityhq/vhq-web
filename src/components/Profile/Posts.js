import React, { Component } from "react";
import Post from "../Post/Post";
import NoPosts from "../Post/NoPosts";
import PostPlaceHolder from "../LoadingSkeletons/PostLoader";
import { connect } from "react-redux";
import { getMyPosts } from "../../store/actions/actions";

const mapStateToProps = (state) => {
  return {
    loading: state.data.myPosts_loading,
    myPosts: state.data.myPosts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMyPosts: () => dispatch(getMyPosts()),
  };
};

class Posts extends Component {
  componentDidMount = () => {
    if (this.props.loading) {
      this.props.getMyPosts();
    }
  };

  render() {
    console.log("=>>", this.props.myPosts);
    if (this.props.loading) {
      return (
        <div>
          <PostPlaceHolder />
          <PostPlaceHolder />
        </div>
      );
    }

    if (this.props.myPosts.length > 0) {
      return (
        <>
          {this.props.myPosts.map((x, index) => (
            <Post key={index} x={x} />
          ))}
        </>
      );
    }

    return (
      <>
        <NoPosts />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
