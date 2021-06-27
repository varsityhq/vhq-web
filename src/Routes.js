import React from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import AddPost from "./pages/addPost";

import Profile from "./pages/Profile";
import SearchPage from "./pages/searchPage";
import UserProfile from "./pages/UserProfile";
import ChatPage from "./pages/ChatPage";
import Discover from "./pages/Discover";

import Setup from "./pages/SetupPage";
import ProfileSettings from "./pages/ProfileSettings";

const mapStateToProps = (state) => {
  return {
    authenticated: state.core.authenticated,
    accData: state.core.accData,
  };
};

class Router extends React.Component {
  render() {
    if (this.props.authenticated) {
      if (this.props.accData.accountStatus === "pending-setup") {
        return (
          <Switch>
            <Route exact path="/setup" component={Setup} />
            <Route
              path="/"
              render={() => {
                return <Redirect to="/setup" />;
              }}
            />
          </Switch>
        );
      }
      return (
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/discover" component={Discover} />

          <Route exact path="/profile" component={Profile} />
          <Route exact path="/settings/profile" component={ProfileSettings} />

          <Route exact path="/add" component={AddPost} />
          <Route exact path="/chat" component={ChatPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route
            exact
            path="/setup"
            render={() => {
              return <Redirect to="/" />;
            }}
          />
          <Route exact path="/:username" component={UserProfile} />
        </Switch>
      );
    } else {
      return (
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route
            render={() => {
              return <Redirect to="/" />;
            }}
          />
        </Switch>
      );
    }
  }
}

export default connect(mapStateToProps, null)(Router);
