import React from "react";
import AvatarImg from "../../assets/img/avatar.png";

import { Container, Avatar, Info } from "./styles";

const FollowSuggestion = ({ name, nickname }) => {
  return (
    <Container>
      <div>
        <Avatar>
          <img src={AvatarImg} alt="Avatar" />
        </Avatar>

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>
      <button className="btn-outline">Follow</button>
    </Container>
  );
};

export default FollowSuggestion;
