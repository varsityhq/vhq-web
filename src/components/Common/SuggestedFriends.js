import React, { Component } from "react";
import { RiLightbulbFlashFill } from "react-icons/ri";
import Account from "./Account";

export default class SuggestedFriends extends Component {
  render() {
    return (
      <div className="v-rounded bg-darkish py-2 mx-2 mt-3">
        <div className="px-3 v-bb d-flex align-items-center py-2 mb-0 bold h5">
          <RiLightbulbFlashFill className="mr-1" />
          Suggested
        </div>
        <Account />
        <Account />
        <Account />
      </div>
    );
  }
}
