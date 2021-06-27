import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Story from "../Stories/Story";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class Stories extends Component {
  state = {};
  render() {
    return (
      <div className="mb-2 v-story-container">
        <Swiper
          freeMode={true}
          // freeMode="true"
          slidesPerView="auto"
          //   className="d-flex"
        >
          <SwiperSlide className="w-fc pl-2">
            <Story />
          </SwiperSlide>
          <SwiperSlide className="w-fc">
            <Story />
          </SwiperSlide>
          <SwiperSlide className="w-fc">
            <Story />
          </SwiperSlide>
          <SwiperSlide className="w-fc">
            <Story />
          </SwiperSlide>
          <SwiperSlide className="w-fc">
            <Story />
          </SwiperSlide>
          <SwiperSlide className="w-fc">
            <Story />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}

export default Stories;
