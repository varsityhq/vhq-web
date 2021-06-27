import React, { Component } from "react";
import { connect } from "react-redux";
import { footerEnabled } from "../store/actions/actions";
import { IoSettingsOutline } from "react-icons/io5";
import { RiAccountPinCircleFill } from "react-icons/ri";
import AdvertSection from "../components/SearchPage/AdvertSection";
import { CgChevronLeft } from "react-icons/cg";
import { IoInfiniteSharp } from "react-icons/io5";
import { BsFilePost } from "react-icons/bs";
import TrendingToday from "../components/SearchPage/TrendingToday";
import SuggestedFriends from "../components/Common/SuggestedFriends";
import HotImages from "../components/SearchPage/HotImages";
import TopPosts from "../components/Common/TopPosts";

const mapDispatchToProps = (dispatch) => {
  return {
    footerEnabled: (state) => dispatch(footerEnabled(state)),
  };
};

class SearchPage extends Component {
  state = {};

  render() {
    return (
      <section className="v-search-page mb-3">
        <div className="v-header-section v2 pr-2 pl-1 py-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-1 d-flex align-items-center text-center">
                <CgChevronLeft className="bold h2 mb-0" />
              </div>
              <div className="col-10 pl-1 pr-2">
                <form className="v-search-form">
                  <input
                    className="px-3"
                    type="text"
                    placeholder="Search VHQ.."
                  />
                </form>
              </div>
              <div className="col-1 d-flex align-items-center text-center">
                <IoSettingsOutline className="h3 mt-1 mb-0" />
              </div>
            </div>
          </div>
        </div>
        <AdvertSection />
        <div className="v-tab-header my-3 oshow d-flex justify-content-between m-2">
          <button className="v-tab-title btn-sm s-active btn btn-clear d-flex justify-content-center px-3">
            <div className="v-tname d-flex align-items-center">
              <IoInfiniteSharp />
              <span className="ml-1 bold">Trending</span>
            </div>
          </button>
          <button className="v-tab-title btn-clear btn-sm btn d-flex justify-content-center px-3">
            <div className="v-tname d-flex align-items-center">
              <BsFilePost />
              <span className="ml-1 bold">Posts</span>
            </div>
          </button>
          <button className="v-tab-title btn-clear btn-sm btn d-flex justify-content-center px-3">
            <div className="v-tname d-flex align-items-center">
              <RiAccountPinCircleFill />
              <span className="ml-1 bold">Accounts</span>
            </div>
          </button>
        </div>

        <div className="p-2">
          <TrendingToday />
        </div>
        <div className="p-2">
          <HotImages />
        </div>
        <div>
          <TopPosts />
        </div>
        <div>
          <SuggestedFriends />
        </div>
      </section>
    );
  }
}

export default connect(null, mapDispatchToProps)(SearchPage);
