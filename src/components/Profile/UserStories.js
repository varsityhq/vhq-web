import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaPlus } from "react-icons/fa";

class UserStories extends Component {
  state = {};
  render() {
    return (
      <section className="mt-3 w-100 position-relative story-container ">
        <Swiper className="" slidesPerView="auto" freeMode={true}>
          <SwiperSlide className="story">
            <div>
              <button className="">
                <FaPlus />
              </button>
              <div className="text-center mt-1">Add</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="story">
            <div>
              <button className="sbtn">
                <img
                  className="profilep"
                  alt=""
                  src="https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-9/146431241_1131405963996762_946846059452846120_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=4SIo4liPuLIAX_MALx0&_nc_ht=scontent-jnb1-1.xx&oh=958546a486ceec8419d87a3e95185495&oe=60D5B21E"
                />
              </button>
              <div className="text-center mt-1">Myself ❤</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    );
  }
}

export default UserStories;
