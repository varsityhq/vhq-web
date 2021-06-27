import React, { Component } from "react";

export default class LoadingAppPage extends Component {
  state = {
    CIRCLE_NUMBER: 3,
  };

  generateCircles = () => {
    const root = document.getElementById("v-l-p");
    const circleContainer = document.createElement("div");
    circleContainer.classList.add("circle-container");

    for (let i = 0; i < this.state.CIRCLE_NUMBER; i++) {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      circle.style.animationDelay = `${3 * (i / this.state.CIRCLE_NUMBER)}s`;
      circleContainer.appendChild(circle);
    }
    root.appendChild(circleContainer);
  };

  componentDidMount = () => {
    this.generateCircles();
  };

  render() {
    return (
      <section
        id="v-l-p"
        style={{ minHeight: window.innerHeight }}
        className="v-loading-page"
      >
        <button className="btn" type="button"></button>
        <div className="position-absolute v-tx-behind">
          <div className="text-lb">Loading VarsityHQ...</div>
        </div>
      </section>
    );
  }
}
