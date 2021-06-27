import React from "react";
import { BsBookmarkPlus, BsHeart } from "react-icons/bs";
import { GoCommentDiscussion } from "react-icons/go";
import {
  IoEllipsisHorizontalOutline,
  IoShareSocialOutline,
} from "react-icons/io5";

export default function PostLoader() {
  return (
    <div className="v-post skeleton pt-1 mt-2 rounded ">
      <div className="d-flex p-2 align-items-center  position-relative">
        <div className="profilep-sk"></div>
        <div className="d-flex px-2 align-content-center h-100 justify-content-between w-100">
          <div
            className="a-cancel"
            to="/c.brendon"
            // className="pl-3 v-post-header mt- d-flex align-items-center"
          >
            <div className="mb-0 w-100">
              <div className="bold user-fname-sk"></div>{" "}
              <span className="d-flex mt-1 user-fname-sk-50 align-items-center text-lb"></span>
            </div>
          </div>
          <button className="bg-transparent border-0 p-0">
            <IoEllipsisHorizontalOutline className="h3 t-dark mt-1 mb-0" />
          </button>
        </div>
      </div>
      {/* <PostImgs /> */}
      <div className="py-2 px-2">
        <div className="user-fname-sk w-100"></div>
        <div className="user-fname-sk mt-1 w-75"></div>
      </div>
      <div className="d-flex justify-content-between pr-2 pt-2">
        <div className="d-flex px-2 align-items-center">
          <button className="mr-3 border-0 bg-transparent p-0 align-items-center d-flex">
            <BsHeart style={{ fontSize: 15 }} className="mb-0 mr-2 t-dark" />{" "}
            <span className="t-dark">-</span>
          </button>
          <button className="mr-3 border-0 bg-transparent p-0 align-items-center d-flex">
            <GoCommentDiscussion
              style={{ fontSize: 16 }}
              className="mb-0 mr-2 t-dark"
            />{" "}
            <span className="t-dark">-</span>
          </button>
          <button className=" border-0 bg-transparent p-0 align-items-center d-flex">
            <IoShareSocialOutline
              style={{ fontSize: 18 }}
              className="mb-0 mr-2 t-dark"
            />
          </button>
        </div>
        <div className="">
          <BsBookmarkPlus className="h4 mb-0 mr-2 t-dark" />
        </div>
      </div>
      <div className="v-post-footer pb-2 px-1 "></div>
    </div>
  );
}
