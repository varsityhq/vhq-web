import React, { Component } from "react";
import { BsImageAlt } from "react-icons/bs";
import { RiBookmark2Fill, RiQuillPenFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiInformationCircle } from "react-icons/hi";

export default class TabsHeader extends Component {
  render() {
    return (
      <div className="v-tab-header">
        <Swiper freeMode={true} slidesPerView="auto">
          <SwiperSlide className="w-fc pl-2">
            <TabName icon={<RiQuillPenFill />} active={true} title="Posts" />
          </SwiperSlide>
          <SwiperSlide className="w-fc">
            <TabName icon={<BsImageAlt />} active={false} title="Pictures" />
          </SwiperSlide>
          <SwiperSlide className="w-fc">
            <TabName icon={<RiBookmark2Fill />} active={false} title="Saved" />
          </SwiperSlide>
          <SwiperSlide className="w-fc">
            <TabName icon={<HiInformationCircle />} active={false} title="About" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}

function TabName({ title, active, icon }) {
  return (
    <div className="v-tab-title d-flex justify-content-center px-3">
      <div className="v-tname d-flex align-items-center">
        {icon} <span className="ml-1 bold"> {title}</span>
      </div>
      {active && <div className="v-tt-border-bottom"></div>}
    </div>
  );
}
