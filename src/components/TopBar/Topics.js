import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
class Topics extends Component {
  state = {};
  render() {
    return (
      <div className="py-2 mt-2">
        <Swiper freeMode={true} slidesPerView="auto">
          <SwiperSlide className="w-fc">
            <div className=" v-border bold btn rounded-pill badge-pill ml-2 rp btn-v">
              All
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-fc">
            <div className=" v-border btn rounded-pill badge-pill ml-2 rp btn-v">
              Today
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-fc">
            <div className=" v-border btn rounded-pill badge-pill ml-2 rp btn-v">
              VarsityHQ
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-fc">
            <div className=" v-border btn rounded-pill badge-pill ml-2 rp btn-v">
              University of Johannesburg
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-fc">
            <div className=" v-border btn rounded-pill badge-pill ml-2 rp btn-v">
              UJ
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}

export default Topics;
