import React, { Component } from "react";

class Account extends Component {
  state = {};
  render() {
    return (
      <div className="v-common-account v-border-top d-flex justify-content-between v-trend py-3 px-3">
        <div className="d-flex w-100 ">
          <div className="mr-2 text-blue bold">
            <div className="pp">
              <img
                className="img-fluid"
                alt=""
                src="https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-9/146431241_1131405963996762_946846059452846120_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=4SIo4liPuLIAX_MALx0&_nc_ht=scontent-jnb1-1.xx&oh=958546a486ceec8419d87a3e95185495&oe=60D5B21E"
              />
            </div>
          </div>
          <div className="w-100">
            <div className="d-flex w-100 justify-content-between align-items-center">
              <div>
                <div className="text-white bold">Harmony C</div>
                <div className="text-lb">@harmo.chikx</div>
              </div>
              <div>
                <button className="btn btn-sm btn-v5 px-3 badge-pill">
                  Follow
                </button>
              </div>
            </div>
            <div className="text-white w-100 mt-1">
              He who scored 3 tries for the sharks academy whilst having a
              hangover
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
