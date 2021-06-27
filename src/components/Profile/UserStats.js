import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";

class UserStats extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex ustats border-bottom pb-4 align-items-center justify-content-betwee">
        <div className="pr-4">
          <div className="position-relative">
            <img
              className="profilep"
              alt=""
              src="https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-9/146431241_1131405963996762_946846059452846120_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=4SIo4liPuLIAX_MALx0&_nc_ht=scontent-jnb1-1.xx&oh=958546a486ceec8419d87a3e95185495&oe=60D5B21E"
            />
            <div className="position-absolute story-plus">
              <FaPlus />
            </div>
          </div>
        </div>

        <div className="">
          <div className="text-white v-text-user-n bold">
            <h3>Harmony C</h3>
          </div>
          <div className="d-flex">
              <div className="text-left pr-4">
                <div className="bold text-blue">2 321</div>
                <div className="t-c2">Followers</div>
              </div>

              <div className="text-left w-100">
                <div className="bold text-blue">125</div>
                <div className="t-c2">Posts</div>
              </div>
              </div>
        </div>

      
      </div>
    );
  }
}

export default UserStats;
