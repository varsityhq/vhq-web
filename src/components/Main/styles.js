import styled, { css } from "styled-components";
// import {
//   ArrowLeft,
//   Home,
//   Search,
//   Notifications,
//   Email,
// } from "../../styles/Icons";

import { FaArrowLeft as ArrowLeft } from "react-icons/fa";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: min(601px, 100%); 

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  @media (min-width: 500px) {
  }
`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background: var(--black);

  display: flex;
  align-items: center;

  text-align: left;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

  > button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;
  fill: var(--twitter);
`;

export const BottomMenu = styled.div`
  position: sticky;
  bottom: 0;
  align-items: center;
  z-index: 2;
  box-shadow: 0px -5px 0px -6px rgb(25 157 223 / 20%),
    0px -4px 5px 0px rgb(25 157 223 / 14%), 0px 1px 9px 2px rgb(25 157 223 / 12%);
  display: flex;
  background: linear-gradient(to bottom, var(--darkish), var(--dark));
  // min(46px, max(10vw, 10px))

  @media (min-width: 500px) {
    display: none;
  }
`;

export const iconCSS = css`
  cursor: pointer;

  fill: var(--white);

  height: 35px;
  width: 35px;

  &:hover,
  &.active {
    background: var(--twitter);
    height: 35px;
    width: 35px;
    padding: 5px;
    border-radius: 100%;
    fill: #fff;
  }
`;

// export const HomeIcon = styled(Home)`
//   ${iconCSS}
// `;

// export const SearchIcon = styled(Search)`
//   ${iconCSS}
// `;

// export const BellIcon = styled(Notifications)`
//   ${iconCSS}
// `;

// export const EmailIcon = styled(Email)`
//   ${iconCSS}
// `;
