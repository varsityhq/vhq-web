import React from "react";
import Logo from "../../assets/img/logo-small.png";
import {
  Container,
  Topside,
  MenuButton,
  HomeIcon,
  ExploreIcon,
  EmailIcon,
  FavoriteIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from "./styles";

const MenuBar = () => {
  return (
    <Container className="v-menubar-container">
      <Topside>
        <div className="v-logo">
          <img src={Logo} className="img-fluid" alt="VHQ" />
        </div>

        <MenuButton className="bg-dark border-0 hXIJwY px-2 rounded sc-dlnjwi">
          <HomeIcon />
          <span>Home</span>
        </MenuButton>

        <MenuButton className="bg-dark border-0 hXIJwY px-2 rounded sc-dlnjwi">
          <ExploreIcon />
          <span>Explore</span>
        </MenuButton>

        <MenuButton className="bg-dark border-0 hXIJwY px-2 rounded sc-dlnjwi">
          <EmailIcon />
          <span>Messages</span>
        </MenuButton>

        <MenuButton className="bg-dark border-0 hXIJwY px-2 rounded sc-dlnjwi">
          <FavoriteIcon />
          <span>Bookmarkss</span>
        </MenuButton>
      </Topside>

      <Botside>
        <Avatar>
          <img
            src="https://avatars1.githubusercontent.com/u/53025782?s=400&u=f1ffa8eaccb8545222b7c642532161f11e74a03d&v=4"
            alt="Elton Lazzarin"
          />
        </Avatar>

        <ProfileData>
          <strong>Harmony Chikari</strong>
          <span>@chikx_12</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
