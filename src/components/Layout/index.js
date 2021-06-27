import React from "react";
import MenuBar from "../MenuBar";
import SideBar from "../SideBar";
// import TopBar from "../TopBar/index";

import { Container, Wrapper } from "./styles";

const Layout = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <SideBar />
      </Wrapper>
    </Container>
  );
};

export default Layout;
