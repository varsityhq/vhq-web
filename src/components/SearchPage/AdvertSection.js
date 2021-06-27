import React, { Component } from "react";
// import BG from "../../assets/img/simage.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";

const BG =
  "https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Category/CAT122.jpg?v=1.68";
class AdvertSection extends Component {
  state = {};
  render() {
    return (
      <div className="v-search-advert-section position-relative">
        <img src={BG} alt="" />
        <div className="v-s-container">
          <div className="ad-content">
            <div className="ad-title">Enjoy KFC Discounts up to 50% OFF</div>
            <button className="btn btn-v2">
              <FaExternalLinkAlt className="mr-1" />
              Follow link
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AdvertSection;
