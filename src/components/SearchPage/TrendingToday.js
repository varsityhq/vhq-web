import React, { Component } from "react";
import Trend from "./trend";
import { BiTrendingUp as TrendingUp } from "react-icons/bi";

export default class TrendingToday extends Component {
  render() {
    return (
      <div className="v-trending-today py-2">
        <div className="px-3 v-bb d-flex align-items-center py-2 mb-0 bold h5">
          {" "}
          <TrendingUp className="mr-1" />
          Topic Trends
        </div>
        <Trend />
        <Trend />
        <Trend />
        <div className="v-border-top d-flex justify-content-between v-trend py-2 pt-3 px-3">
          See all trends
        </div>
      </div>
    );
  }
}
