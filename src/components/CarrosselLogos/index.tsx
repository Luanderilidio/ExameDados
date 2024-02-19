import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "../../utils/Swiper.css";
import { data } from "./data";
import { useMediaQuery } from "react-responsive";

export function CarroselLogos() {

  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div className="w-full col-span-12 mb-20">
      <Swiper
        spaceBetween={0}
        loop
        slidesPerView={isMobile ? 3 : 7}
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
          <SwiperSlide className="bg-transparent p-3 w-96 sm:w-20 flex !items-center justify-center h-full">
            <img src={item.image} alt="" className="w-96 sm:w-20   flex items-center justify-center rounded-md drop-shadow-xl" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
