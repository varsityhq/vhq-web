import React, { Component } from "react";
// import TopBar from "../components/TopBar/index";
import Post from "../components/Post/Post";
import Topics from "../components/TopBar/Topics";
import Stories from "../components/Stories/stories";
import { BsList } from "react-icons/bs";
import { MdExplore } from "react-icons/md";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import PostLoader from "../components/LoadingSkeletons/PostLoader";

const mapStateToProps = (state) => {
  return {
    university: state.core.accData.university,
  };
};

class HomePage extends Component {
  state = {
    posts: [],
    stories: [],
    topics: [],
    loading: true,
  };

  componentDidMount = () => {
    axios
      .get("/get/home")
      .then((data) => {
        console.log(data.data);
        this.setState({
          posts: data.data.posts,
          loading: false,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <section>
        <div className="v-header-section pt-4 pb-4">
          <div className="text-center">
            <h1 className="bold v-vhq-name mb-0">VarsityHQ</h1>
            <div className="text-lb">{this.props.university}</div>
          </div>
          <div className="px-2 mb-1 mt-3 d-flex justify-content-center">
            <Link
              to="/"
              className="btn d-flex align-items-center px-4 mr-1 btn-light bold badge-pill"
            >
              <BsList className="text-dark mr-1" /> Timeline
            </Link>
            <Link
              to="/discover"
              className="btn d-flex align-items-center px-4 ml-1 btn-v5 bold badge-pill"
            >
              <MdExplore className="text-lb mr-1" />
              Discover
            </Link>
          </div>
          <div>
            <Stories />
          </div>
        </div>
        <div className="v-content-section pt- ">
          <div className="v-tab-header shadow-none rounded-0 pb-1">
            <Topics />
          </div>
          <div>
            {this.state.loading ? (
              <>
                <PostLoader />
                <PostLoader />
                <PostLoader />
              </>
            ) : (
              <>
                {this.state.posts.map((x, index) => (
                  <Post x={x} key={index} />
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps, null)(HomePage);
