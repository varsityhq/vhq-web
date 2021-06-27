import React, { Component } from "react";

class CreatePost extends Component {
  state = {};
  render() {
    return (
      <div className="mt-0">
        <div className="v-cs-container p-2">
          <div className="d-flex">
            <div className="">
              <div>
                <img
                  alt=""
                  className="img-fluid pro_p"
                  src="https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-1/cp0/p40x40/146431241_1131405963996762_946846059452846120_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeEiEIEs2ztSDF2c-1glyi45KpMRXv3AsBgqkxFe_cCwGMIS2qNILh1EjULO_WccF7tD7Xjs6NTV0Sdxg0O4jQnY&_nc_ohc=kKKxAZTkfZIAX-Heoly&_nc_ht=scontent-jnb1-1.xx&tp=27&oh=3a0d2501184345f291966cfb6b816813&oe=60A172F3"
                />
              </div>
            </div>
            <div className="post-box">
              <div className="border">Type anything..</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePost;
