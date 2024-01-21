import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import SendIcon from '@mui/icons-material/Send';

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Base } from "../../Base";
import Ilustration5 from "../../../assets/Ilustration5.svg";
import Ilustration6 from "../../../assets/Ilustration6.svg";
import Ilustration7 from "../../../assets/Ilustration7.svg";
import { CardCase } from "../../CardCase";

import MailIcon from "@mui/icons-material/Mail";

import "swiper/css";
import "swiper/css/pagination";
import "../../../utils/Swiper.css";
import { data } from "./data";
import Background from "../../../assets/Ilustration9.svg";

export const Session5 = () => {
  return (
    <Base>
      <div className="grid grid-cols-12 gap-10 relative !font-Sora">
        <img
          src={Ilustration6}
          alt=""
          className="absolute -right-10 opacity-30"
        />

        <div className="col-span-12 flex items-center  justify-evenly h-96 rounded-3xl bg-gradient-to-r from-amber-700 via-amber-500 to-amber-500">
          <div className="flex gap-5">
            <div className="w-8 h-60 rounded-full">
              <img
                src="https://img.freepik.com/fotos-gratis/trabalhadores-de-escritorio-usando-graficos-de-financas_23-2150408656.jpg?size=626&ext=jpg&ga=GA1.1.556414127.1705787117"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-8 h-60 rounded-full mt-7">
              <img
                src="https://img.freepik.com/fotos-gratis/trabalhadores-de-escritorio-usando-graficos-de-financas_23-2150408656.jpg?size=626&ext=jpg&ga=GA1.1.556414127.1705787117"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-8 h-60 rounded-full">
              <img
                src="https://img.freepik.com/fotos-gratis/trabalhadores-de-escritorio-usando-graficos-de-financas_23-2150408656.jpg?size=626&ext=jpg&ga=GA1.1.556414127.1705787117"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className=" flex items-center justify-center flex-col gap-5 !w-fit">
            <h1 className="font-bold text-5xl text-center !w-fit ">
              Fale com um especialista <br /> agora mesmo!
            </h1>
            <h2 className="font-normal  text-xl text-center  ">
              Entre em contato conosco e tire todas suas dúvidas!
            </h2>
            <button className=" flex items-center gap-2 font-bold text-2xl bg-black rounded-full w-fit p-5 transition ease-in-out hover:scale-105 active:scale-95">
              <MailIcon />
              <p>institutoexatadados@gmail.com</p>
              <SendIcon />
            </button>
            <div className="flex gap-4 font-Sora">
              <button className="py-5 px-7 flex items-center justify-center gap-2 rounded-full  bg-white text-2xl text-black font-bold transition ease-in-out hover:scale-105 active:scale-95 ">
              <EventAvailableIcon sx={{ fontSize: 30 }} /> Agendar Reunião 
              </button>
              <button className="py-5 px-7 flex items-center justify-center gap-2 rounded-full bg-green-500 hover:bg-green-400 text-2xl text-black font-bold transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-green-500/10 hover:shadow-green-500/30 active:shadow-green-500/10">
                <WhatsAppIcon sx={{ fontSize: 30 }} /> Fale Conosco
              </button>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-8 h-60 rounded-full">
              <img
                src="https://img.freepik.com/fotos-gratis/trabalhadores-de-escritorio-usando-graficos-de-financas_23-2150408656.jpg?size=626&ext=jpg&ga=GA1.1.556414127.1705787117"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-8 h-60 rounded-full mt-7">
              <img
                src="https://img.freepik.com/fotos-gratis/trabalhadores-de-escritorio-usando-graficos-de-financas_23-2150408656.jpg?size=626&ext=jpg&ga=GA1.1.556414127.1705787117"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-8 h-60 rounded-full">
              <img
                src="https://img.freepik.com/fotos-gratis/trabalhadores-de-escritorio-usando-graficos-de-financas_23-2150408656.jpg?size=626&ext=jpg&ga=GA1.1.556414127.1705787117"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};
