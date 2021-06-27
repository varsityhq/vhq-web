import React, { Component } from "react";
import { CgChevronLeft } from "react-icons/cg";
import { FaEllipsisH, FaInstagram, FaUniversity } from "react-icons/fa";
import { BsChatFill } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import { AiFillPushpin } from "react-icons/ai";
import TabsHeader from "../components/Common/TabsHeader";
import Post from "../components/Post/Post";

export default class UserProfile extends Component {
  render() {
    return (
      <section className="v-user-ppage">
        <div className="v-header-section pt-4 pb-4">
          <div className="d-flex align-items-center px-2 mb-3 justify-content-between">
            <div>
              <CgChevronLeft className="bold h1 mb-0" />
            </div>
            <div>
              <div className="v-user-pp">
                <img
                  alt=""
                  className="img-fluid"
                  src="https://i2-prod.dailyrecord.co.uk/incoming/article20793986.ece/ALTERNATES/s1200c/0_England-v-South-Africa-Rugby-World-Cup-2019-Final.jpg"
                />
              </div>
            </div>
            <div className="pr-3">
              <FaEllipsisH className="bold h4 mb-0" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="bold mb-0">Brendon</h3>
            <div className="px-2">
              <div className="text-light justify-content-center d-flex align-items-center">
                <FaUniversity className="mr-2" /> University of Johannesburg
              </div>
              <div className="text-light text-center justify-content-center d-flex align-items-center">
                <AiFillPushpin className="mr-2" /> 2nd Year, Bsc Computer
                Science
              </div>
            </div>
            <div className="border-top mx-4 my-2"> </div>
            <div className="">
              <p className="w-100 px-2 text-center m-aut">
                Professional rugby player, played 7 varsity cup tornaments in 5
                yrs
              </p>
            </div>
            <div className="d-flex mt-2 justify-content-center">
              <button className="btn badge-pill btn-v5">
                <FaInstagram className="h5 mb-0" />
              </button>
              <button className="btn badge-pill ml-2 btn-v5">
                <BsChatFill className="h5 mb-0" />
              </button>
              <button className="btn badge-pill text-white px-4 ml-2 btn-v5">
                <FiUserPlus className="mr-1" /> Follow
              </button>
            </div>
            <div className="text-center mt-2">
              5 <span className="text-lb">Friends</span> | 10{" "}
              <span className="text-lb">Following</span>
            </div>
          </div>
        </div>
        <div className="v-content-section ">
          <div className="mt-2 p-2">
            <TabsHeader />
          </div>
          <div className="mt-2 mb-5 pb-5 p-1">
            <Post />
            <Post />
          </div>
        </div>
      </section>
    );
  }
}
