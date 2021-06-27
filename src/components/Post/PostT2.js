import React, { Component } from "react";
import { BsBookmarkPlus, BsHeart } from "react-icons/bs";
import { GoCommentDiscussion } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default class PostT2 extends Component {
  render() {
    return (
      <div className="v-post-type-2 pb-1 mt-5 px-2 position-relative v-rounded">
        <div className="v-user-avatar">
          <img
            alt="avatar"
            className="img-fluid"
            src="https://picsum.photos/300/300"
          />
        </div>
        <div className="v-user-handle-info ">
          <Link
            className="a-cancel"
            to="/c.brendon"
            // className="pl-3 v-post-header mt- d-flex align-items-center"
          >
            <div className="mb-0 d-flex">
              <span className="bold mr-2">Brendon C</span>{" "}
              <span className="d-flex align-items-center text-lb">
                @c.brendon
              </span>
            </div>
          </Link>
        </div>
        <div className="p-2">
          I'm just testing by posting this I'm just testing by posting this I'm
          just testing by posting this
        </div>
        <div>
          <div className="d-flex justify-content-between pr-2 pt-2">
            <div className="d-flex px-2 align-items-center">
              <button className="mr-3 border-0 bg-transparent p-0 align-items-center d-flex">
                <BsHeart style={{ fontSize: 15 }} className="mb-0 mr-2" /> 23
              </button>
              <button className="mr-3 border-0 bg-transparent p-0 align-items-center d-flex">
                <GoCommentDiscussion
                  style={{ fontSize: 16 }}
                  className="mb-0 mr-2"
                />{" "}
                4
              </button>
              <button className=" border-0 bg-transparent p-0 align-items-center d-flex">
                <IoShareSocialOutline
                  style={{ fontSize: 18 }}
                  className="mb-0 mr-2"
                />
              </button>
            </div>
            <div className="">
              <BsBookmarkPlus className="h4 mb-0 mr-2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
