import React, { Component } from "react";
import PostTarget from "../components/Post/PostTarget";
import AddPostContent from "../components/Post/AddPostContent";
import { connect } from "react-redux";
import { footerEnabled } from "../store/actions/actions";
import { Link } from "react-router-dom";
import { IoPushOutline } from "react-icons/io5";
import Fade from "react-reveal/Fade";
import { FaUserTag } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";
import { ImStatsBars } from "react-icons/im";
import { MdArrowBack } from "react-icons/md";
import AddPicture from "../components/CreatePost/AddPicture";
import SelectedPictures from "../components/CreatePost/SelectedPictures";
import store from "../store/store";
import axios from "axios";

const mapStateToProps = (state) => {
  return {
    core: state.core,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    footerEnabled: (state) => dispatch(footerEnabled(state)),
  };
};

class AddPost extends Component {
  state = {
    id: "",
    posted_by: "",
    application: "",
    can_reply_privately: "true",
    caption: null,
    postText: "",
    created_at: "",
    feed_targeting: "",
    fromUniversity: this.props.core.accData.university,
    is_eligible_for_promotion: "true",
    is_promoted: "false",
    is_expired: "false",
    is_hidden: "false",
    is_popular: "false",
    shares_count: "0",
    comments_count: "0",
    reported_count: "0",
    likes_count: "0",
    saved_count: "0",
    tagged_users: [],
    postHashTags: [],
    postType: "normal_post",
    link: "",
    attachments: [],
    local_attachments: [],
  };

  handleSubmit = () => {
    store.dispatch({ type: "SET_OVERLAY_LOADER", payload: true });
    let postObj = {
      application: "VHQ for Web",
      can_reply_privately: this.state.can_reply_privately,
      caption: this.state.caption,
      postText: this.state.postText,
      is_eligible_for_promotion: "true",
      tagged_users: this.state.tagged_users,
      postHashTags: this.state.postHashTags,
      postType: this.state.postType,
      fromUniversity: this.state.fromUniversity,
      attachments: [],
    };

    axios
      .post("/post/new", postObj)
      .then((data) => {
        console.log(data.data);
        localStorage.removeItem("content");
        localStorage.removeItem("local_attachments");
        store.dispatch({ type: "SET_OVERLAY_LOADER", payload: false });
      })
      .catch((err) => {
        store.dispatch({ type: "SET_OVERLAY_LOADER", payload: false });
        console.log(err);
      });
  };

  componentDidMount = () => {
    this.props.footerEnabled(false);
    let possible_local_attachments = localStorage.getItem("local_attachments");
    if (possible_local_attachments) {
      this.setState({
        local_attachments: JSON.parse(possible_local_attachments),
      });
    }
  };

  componentWillUnmount = () => {
    this.props.footerEnabled(true);
    if (this.state.local_attachments.length > 0) {
      localStorage.setItem(
        "local_attachments",
        JSON.stringify(this.state.local_attachments),
      );
    }
  };

  removeAttachment = (x) => {
    let filteredAtt = [];
    this.state.local_attachments.forEach((i) => {
      if (x !== i) {
        filteredAtt.push(i);
      }
    });

    this.setState({
      local_attachments: filteredAtt,
    });
  };

  setCaption = (txt) => {
    this.setState({
      caption: txt,
    });
  };

  handlePostText = (txt) => {
    let receivedTxt = txt;
    let postHashTags = receivedTxt.match(/#[^\s#\.\;]*/gim);
    let tagged_users = receivedTxt.match(/@[^\s@\.\;]*/gim);
    this.setState({ postText: txt, postHashTags, tagged_users });
  };

  addAttachment = (img) => {
    let attachments = this.state.local_attachments;
    attachments.push(img);
    this.setState({
      local_attachments: attachments,
    });
  };

  render() {
    console.log(this.state);
    return (
      <section className="v-post-add-page">
        <Fade bottom>
          <div className="d-flex v-bb px-2 py-3 justify-content-between align-items-center">
            <div>
              <Link
                to="/profile"
                className="d-flex a-cancel text-white align-items-center"
              >
                <MdArrowBack className="h3 mb-0" />
                <span className="ml-3 bold">Create Post</span>
              </Link>
            </div>

            <div>
              <button className="btn border-0 btn-v5 text-light d-flex align-items-center bold">
                <IoPushOutline className="mr-1 text-light" />
                Post
              </button>
            </div>
          </div>

          <section className="">
            <PostTarget />
            <AddPostContent
              onCaptionChage={(txt) => this.setCaption(txt)}
              onTextChange={(txt) => this.handlePostText(txt)}
            />
          </section>
          <div className="p-2 v-addpost-foote v-bt">
            {/* <AddPostStuff /> */}
            <div className="d-flex">
              {this.state.local_attachments.map((x, index) => (
                <SelectedPictures
                  remove={(x) => this.removeAttachment(x)}
                  imgsrc={x}
                  key={index}
                />
              ))}
              <AddPicture addAttachment={(img) => this.addAttachment(img)} />

              <div className="v-post-add-image my-2 d-flex justify-content-center align-items-center">
                <ImStatsBars className="h2 mb-0" />
              </div>

              {/* Left for later */}
              {/* <div className="v-post-add-image ml-3 my-2 d-flex justify-content-center align-items-center">
            <FaUserTag className="h2 mb-0" />
          </div> */}
            </div>
            <div className="pt-1">
              {this.state.postText === "" ||
              this.state.postText === "\n" ||
              this.state.postText === null ? (
                <button
                  disabled
                  className="btn h4 mb-0 px-3 py-2 btn-v2 w-100 my-2 bold d-flex justify-content-center border-0"
                >
                  Post
                </button>
              ) : (
                <Link
                  to="/"
                  onClick={this.handleSubmit}
                  className="btn h4 mb-0 px-3 py-2 btn-v2 w-100 my-2 bold d-flex justify-content-center border-0"
                >
                  Post
                </Link>
              )}
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
