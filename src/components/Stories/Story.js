import React, { Component } from "react";
// import { FaPlus } from "react-icons/fa";

class CreateNewStory extends Component {
  state = {};
  render() {
    return (
      <div className="v-story-wrapper">
        <div className="v-story-button">
          <img
            alt=""
            className="img-fluid"
            src="https://i2-prod.dailyrecord.co.uk/incoming/article20793986.ece/ALTERNATES/s1200c/0_England-v-South-Africa-Rugby-World-Cup-2019-Final.jpg"
          />
        </div>
        <div className="text-center bold text-light text-truncate mt-2">Brendon</div>
      </div>
    );
    // return (
    //   <div className="position-relative v-story-wrapper">
    //     <div className="main-area position-relative">
    //       <div className="position-absolute v-tint"></div>
    //       <img
    //         alt=""
    //         className="img-fluid"
    //         src="https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-9/146431241_1131405963996762_946846059452846120_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=4SIo4liPuLIAX_MALx0&_nc_ht=scontent-jnb1-1.xx&oh=958546a486ceec8419d87a3e95185495&oe=60D5B21E"
    //       />
    //     </div>
    //     <div className="footer justify-content-center d-flex">
    //       <div className="d-flex plus align-items-center w-100 justify-content-center">
    //         <img
    //           alt=""
    //           className="img-fluid"
    //           src="https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-9/146431241_1131405963996762_946846059452846120_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=4SIo4liPuLIAX_MALx0&_nc_ht=scontent-jnb1-1.xx&oh=958546a486ceec8419d87a3e95185495&oe=60D5B21E"
    //         />
    //       </div>
    //     </div>
    //     <div className="d-flex justify-content-center v-story-cs">Violeta S</div>
    //   </div>
    // );
  }
}

export default CreateNewStory;
