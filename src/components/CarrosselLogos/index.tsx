import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "../../utils/Swiper.css";
import { data } from "./data";

export function CarroselLogos() {
  return (
    <div className="w-full col-span-12">
      <Swiper
        spaceBetween={0}
        loop
        slidesPerView={6}
        // pagination={{
        //   dynamicBullets: false,
        //   hideOnClick: true,
        //   renderBullet: false
        // }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {data.map((item: any, index): any => (
          <SwiperSlide className="bg-transparent p-3 w-36 flex !items-center justify-center h-full">
            <img src={item.image} alt="" className="!w-36 flex items-center justify-center rounded-lg drop-shadow-lg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
