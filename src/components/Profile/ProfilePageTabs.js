import React, { Component } from "react";
import Post from "../Post/Post";
// import Gallery from "../Profile/Gallery";
// import { BsFilePost } from "react-icons/bs";
import { IoLinkSharp } from "react-icons/io5";
import { BiBookmark } from "react-icons/bi";
// import { AiOutlinePicture } from "react-icons/ai";
// import { BsGrid1X2, BsGrid1X2Fill } from "react-icons/bs";
import { RiGalleryFill } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi";

class ProfilePageTabs extends Component {
  state = {};
  render() {
    return (
      <section>
        <div className="mt-3 py-2 border-top border-bottom">
          <div className="px-3">
            <div className="container-fluid">
              <div className="row">
                <div className="col-3">
                  <div className="d-flex justify-content-center align-items-center">
                    <RiGalleryFill className="icon-s2 mr-1" />
                  </div>
                </div>
                <div className="col-3">
                  <div className="d-flex justify-content-center align-items-center">
                    <HiOutlinePencil className="icon-s2 mr-1" />
                  </div>
                </div>
                <div className="col-3 position-relative">
                  <div className="d-flex justify-content-center align-items-center">
                    <BiBookmark className="icon-s2 mr-1" />
                  </div>
                  {/* <div className="tab-active"></div> */}
                </div>
                <div className="col-3">
                  <div className="d-flex justify-content-center align-items-center">
                    <IoLinkSharp className="icon-s2 mr-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <Gallery /> */}
          <div className="border-bottom p-3 h5 bold">Posted by @yandax12</div>
          <div className="">
            <Post />
            <Post />
          </div>
        </div>
      </section>
    );
  }
}

export default ProfilePageTabs;
