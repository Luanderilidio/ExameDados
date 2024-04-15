// @ts-nocheck

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import SendIcon from "@mui/icons-material/Send";

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
import { Link } from "@mui/material";
import CardCEO from "../../CardCEO";

export const Session6 = () => {
  return (
    <Base>
      <div className=" sm:grid grid-cols-12 gap-10 relative !font-Sora mb-28 px-4">
        <img
          src={Ilustration6}
          alt=""
          className="absolute -right-10 opacity-30 hidden"
        />
        <div className="col-span-12 ">
          <div className="flex gap-3">
            <div className="w-2 h-20 bg-amber-500 rounded-full transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-[#ffba3a]/30 hover:shadow-[#ffba3a]/20 active:shadow-[#ffba3a]/5" />
            <h1 className="text-5xl font-normal font-Sora text-left w-fit">
              <span className="text-amber-500 font-bold">Conheça</span> <br />{" "}
              nossa <span className="italic underline">Equipe</span>
            </h1>
          </div>
        </div>
        {data.map(item => (

        <div className="col-span-3">
          <CardCEO
            instagram={item.instagram}
            avatar={item.avatar}
            photo={item.photo}
            linkedin={item.linkedin}
            name={item.name}
            office={item.office}
            specialties={item.specialties}
            text={item.text}
          />
        </div>
        ))}
      </div>
    </Base>
  );
};
