import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Base } from "../../Base";
import Ilustration5 from "../../../assets/Ilustration5.svg";
import Ilustration6 from "../../../assets/Ilustration6.svg";
import Ilustration9 from "../../../assets/Ilustration9.svg";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { CardCase } from "../../CardCase";


import "swiper/css";
import "swiper/css/pagination";
import "../../../utils/Swiper.css";
import { data } from "./data";
import Background from  "../../../assets/Ilustration9.svg"
import { useMediaQuery } from "react-responsive";

export const Session4 = () => {

  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <Base>
      <div className="sm:h-screen h-full sm:grid grid-cols-12 gap-10 relative !font-Sora px-4 sm:p-0 mt-20 ">
        <img
          src={Ilustration6}
          alt=""
          className="absolute -left-10 hidden sm:block"
        />
        <img
          src={Background}
          alt=""
          className="absolute -left-10  rotate-180 hidden sm:block" 
        />


        <div className="col-span-12 sm:col-span-7 hidden sm:block ">
          <Swiper
            spaceBetween={0}
            slidesPerView={isMobile ? 1 : 2}
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
              <SwiperSlide className="bg-transparent p-3">
                <CardCase
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                  content={item.content}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="col-span-5 items-center flex">
          <div className="flex gap-3">

          <div className="flex flex-col justify-start items-end">
            <h1 className="text-5xl font-normal font-Sora w-full text-right">
              <span className="text-amber-500 font-bold">Nossos</span> cases <br /> de <span className="italic underline">Sucesso</span>
            </h1>
            <p className="text-sm sm:text-md font-normal text-right opacity-80 mt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>

            <button
              // onClick={handleOpen}
              className="w-fit py-3 px-5 mt-5 hidden sm:flex items-center justify-center gap-2 rounded-full  bg-amber-300 hover:bg-amber-400 text-lg text-amber-800 font-bold transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-gray-500/10 hover:shadow-gray-500/20 active:shadow-gray-500/5"
            >
              Agendar uma Reunião
              <EventAvailableIcon sx={{ fontSize: 20 }} />

            </button>
         
            <div />
            <div />
          </div>
          <div className="w-10 h-20 bg-amber-600 rounded-full transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-[#ffba3a]/30 hover:shadow-[#ffba3a]/20 active:shadow-[#ffba3a]/5" />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-7 block  sm:hidden">
          <Swiper
            spaceBetween={0}
            slidesPerView={isMobile ? 1 : 2}
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
              <SwiperSlide className="bg-transparent p-3">
                <CardCase
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                  content={item.content}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Base>
  );
};
