import React, { Component } from "react";
import { RiHome5Line, RiQuillPenFill, RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BiMessageSquare, BiUserCircle } from "react-icons/bi";

class BottomMenuComponent extends Component {
  state = {};
  render() {
    return (
      <div className="w-100 v-footer-icons">
        <Link to="/">
          {" "}
          <RiHome5Line />
        </Link>
        <Link to="/search">
          {" "}
          <RiSearchLine />
        </Link>
        <Link to="/add">
          <div className="v-add"></div>
          <RiQuillPenFill className="v-add-icon " />
        </Link>
        <Link to="/chat">
          <BiMessageSquare />
        </Link>
        <Link to="/profile">
          <BiUserCircle className="pl" />
        </Link>
      </div>
    );
  }
}

export default BottomMenuComponent;
