import React, { Component } from "react";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import { IoMdArrowDropup } from "react-icons/io";
// import {tren} from "react-icons/fa"

class Trend extends Component {
  state = {};
  render() {
    return (
      <div className="v-border-top d-flex justify-content-between v-trend py-2 px-3">
        <div className="d-flex align-items-center">
          <div className="mr-2 text-blue bold">
            <IoMdArrowDropup className="h3 mb-0" />
          </div>
          <div>
            <div className="text-lb bold vf">Trending at UJ</div>
            <div className="bold">#VARSITYHQ</div>
            <div className="text-lb vf">4,511 Posts</div>
          </div>
        </div>
        <div>
          <IoEllipsisHorizontalOutline />
        </div>
      </div>
    );
  }
}

export default Trend;
