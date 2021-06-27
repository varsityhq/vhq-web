import React from "react";
import { Container } from "./styles";

const News = ({ header, topic, link }) => {
  return (
    <Container>
      <div>
        <span>{header}</span>
        <strong>{topic}</strong>
      </div>
      {link ? <img src={link} alt="News" /> : ""}
    </Container>
  );
};

export default News;
