import React, { Component } from "react";
import { Container, Wrapper } from "./components/Layout/styles";
import SuggestPhone from "./pages/SuggestPhone";
import BottomMenuComponent from "./components/BottomMenuComponent/BottomMenuComponent";
import {
  Container as InnerContainer,
  BottomMenu,
} from "./components/Main/styles";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import MenuBar from "./components/MenuBar";
import SideBar from "./components/SideBar";
import { connect } from "react-redux";
import MenuNav from "./components/Common/MenuNav";
import OverlayLoader from "./components/Common/OverlayLoader";
import {
  handleMenuNav,
  setAuthState,
  getAccount,
} from "./store/actions/actions";
import axios from "axios";
import store from "./store/store";
import { checkCookie, getCookie } from "./util/cookies";
import LoadingAppPage from "./pages/LoadingAppPage";

axios.defaults.baseURL =
  "https://us-central1-varsityhq-bd225.cloudfunctions.net/apis";

// axios.defaults.baseURL =
//   "http://localhost:5000/varsityhq-bd225/us-central1/apis";

const mapStateToProps = ({ core, menuNav }) => ({
  core,
  menuNav: menuNav,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleMenuNav: (n) => dispatch(handleMenuNav(n)),
    setAuthState: (s) => dispatch(setAuthState(s)),
  };
};

if (checkCookie("vhqat")) {
  const vhqat = `Bearer ${getCookie("vhqat")}`;
  axios.defaults.headers.common["Authorization"] = vhqat;
  store.dispatch(setAuthState(true));
} else {
  store.dispatch(setAuthState(false));
}

class AppContainer extends Component {
  state = {};

  componentDidMount = () => {
    if (!this.props.core.accData && this.props.core.authenticated) {
      store.dispatch(getAccount());
    }
  };

  render() {
    const { menuNav, handleMenuNav } = this.props;

    if (this.props.core.authenticated && !this.props.core.accData) {
      return <LoadingAppPage />;
    }

    if (this.props.core.authenticated) {
      if (this.props.core.accData.accountStatus === "pending-setup") {
        return (
          <>
            {this.props.menuNav.overlayLoader && <OverlayLoader />}
            <Routes />
          </>
        );
      }

      return (
        <>
          <Router>
            <Container>
              {this.props.menuNav.overlayLoader && <OverlayLoader />}
              <Wrapper>
                <MenuBar />
                <InnerContainer>
                  <Routes />
                  {this.props.core.showFooterMenu && (
                    <BottomMenu>
                      <BottomMenuComponent />
                    </BottomMenu>
                  )}
                </InnerContainer>
                <SideBar />
              </Wrapper>
              <MenuNav {...{ menuNav, handleMenuNav }} />
            </Container>
          </Router>
        </>
      );
    } else {
      return (
        <>
          <div className="d-none d-md-none d-lg-block">
            <SuggestPhone />
          </div>
          <Routes />
        </>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
