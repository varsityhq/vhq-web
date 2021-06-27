import React, { Component } from "react";
import { MdArrowBack } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { GiThreeFriends } from "react-icons/gi";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import ButtonSelectGroup from "../../components/Common/ButtonSelectGroup";
import { BsFillLockFill } from "react-icons/bs";
import { connect } from "react-redux";
import { setAudience } from "../../store/actions/actions";

const mapStateToProps = (state) => {
  return {
    audience: state.core.accData.postAudience,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAudience: (n) => dispatch(setAudience(n)),
  };
};

class Audience extends Component {
  state = {
    audience: this.props.audience ? this.props.audience : "public",
  };
  onBSChange = (n) => {
    console.log(n);
    this.setState({
      audience: n,
    });
  };

  setAudience = () => {
    let audience = this.state.audience;
    this.props.setAudience(audience);
  };

  render() {
    return (
      <div style={{ minHeight: window.innerHeight }} className="">
        <Fade bottom>
          <div className="v-header-section d-flex justify-content-between align-items-center d-flex py-3 p-2 bold ">
            <Link
              to="/add"
              className="d-flex a-cancel text-white align-items-center"
            >
              <MdArrowBack className="h3 mb-0" />
              <span className="ml-3">Set Audience</span>
            </Link>
            <Link
              onClick={this.setAudience}
              to="/add"
              className="d-flex px-3 a-cancel text-white align-items-center"
            >
              <span className="ml-3">Done</span>
            </Link>
          </div>
          <div className="mb-3">
            <ButtonSelectGroup
              template="temp2"
              im="set-p-aud"
              values={["public", "friends", "only-me"]}
              options={[
                <div className="d-flex align-items-center">
                  <BiWorld className="mr-2" />
                  Public
                </div>,

                <div className="d-flex align-items-center">
                  <GiThreeFriends className="mr-2" />
                  Friends
                </div>,
                <div className="d-flex align-items-center">
                  <BsFillLockFill className="mr-2" />
                  Only Me
                </div>,
              ]}
              selected={this.state.audience}
              onChangeFn={(n) => this.onBSChange(n)}
            />
            <div className="mt-3 px-2 text-lb">
              Select people who will see your post. By default, everyone can see
              your posts.
            </div>
            <div className="d-flex justify-content-center mt-2">
              <Link
                to="/add"
                onClick={this.setAudience}
                className="btn btn-v4 text-center p-2 my-3 bold"
              >
                Set audience to {this.state.audience.replace(/-/g, " ")}
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Audience);
