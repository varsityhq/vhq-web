import React, { Component } from "react";
import { HiLightningBolt } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import PostT2 from "../Post/PostT2";

export default class TopPosts extends Component {
  render() {
    return (
      <div className="mb-4 mt-2">
        <div className="px-3 v-bb d-flex align-items-center py-2 mb-0 bold h5">
          <HiLightningBolt className="mr-1" />
          Top Posts
        </div>
        <Swiper freeMode={true} slidesPerView="auto">
          <SwiperSlide className="w-fc pl-2">
            <PostT2 />
          </SwiperSlide>
          <SwiperSlide className="w-fc pl-2">
            <PostT2 />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}
