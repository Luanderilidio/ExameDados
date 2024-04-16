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

export const Session5 = () => {
  return (
    <Base>
      <div className=" sm:grid grid-cols-12 gap-10 relative !font-Sora mb-28 px-4">
        <img
          src={Ilustration6}
          alt=""
          className="absolute -right-10 opacity-30 hidden"
        />
        <img
          src={Ilustration6}
          alt=""
          className="absolute -left-10 hidden sm:block"
        />
        <div className="col-span-12 flex items-center  justify-evenly h-96 rounded-3xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400">
          <div className="hidden sm:flex gap-5 ">
            <div className="w-8 h-60 rounded-full shadow-lg shadow-black/30">
              <img
                src="https://img.freepik.com/fotos-gratis/conexao-de-rede-de-internet-de-negocios-globais-iot-internet-das-coisas-conceito-de-inteligencia-de-negocios-rede-global-de-negocios-fundo-de-tecnologia-futurista-ai-generative_1258-176775.jpg?w=740&t=st=1705934858~exp=1705935458~hmac=98bd3bd8f4350296678ea8a11c506c51a38f4275e62e51a68b161bd56f9edbe7"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-8 h-60 rounded-full mt-7">
              <img
                src="https://img.freepik.com/fotos-gratis/homem-usando-um-tablet-para-trabalhar-e-se-conectar-com-outras-pessoas_23-2149369110.jpg?w=740&t=st=1705934724~exp=1705935324~hmac=822145d765f8d04f025dee5a0bb1b4c45fccaad9840904e74abd99f09727781e"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-8 h-60 rounded-full shadow-lg shadow-black/30">
              <img
                src="https://img.freepik.com/fotos-gratis/pesquisador-usando-uma-tecnologia-futurista-de-tela-de-tablet-digital-transparente_53876-101147.jpg?w=740&t=st=1705934761~exp=1705935361~hmac=fc6e7e2f0fd8229d047924ef4a719f75e851c312795fd35aaf1f979775cdd7fe"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className=" flex items-center justify-center flex-col gap-5 !w-fit">
            <h1 className="font-bold text-white text-2xl sm:text-5xl text-center !w-fit ">
              Fale com um especialista <br /> agora mesmo!
            </h1>
            <h2 className="font-normal text-white text-md sm:text-xl text-center  ">
              Entre em contato conosco <br className="block sm:hidden" /> e tire
              todas suas dúvidas!
            </h2>
            <Link
              href="mailto:seuendereco@gmail.com?subject=Assunto do E-mail&body=Corpo do E-mail"
              target="_blank"
              rel="noreferrer"
              className="!text-white !no-underline"
            >
              <button className=" flex items-center gap-2 hover:underline font-bold text-sm  sm:text-lg bg-black rounded-full w-fit p-3 sm:p-5 transition ease-in-out hover:scale-105 active:scale-95">
                <MailIcon />
                <p>institutoexatadados@gmail.com</p>
                <SendIcon />
              </button>
            </Link>
            <div className="flex flex-col sm:flex-row gap-4 font-Sora">
              <button className=" py-3 px-5 flex items-center justify-center gap-2 rounded-full  bg-white text-lg text-black font-bold transition ease-in-out hover:scale-105 active:scale-95 ">
                <EventAvailableIcon sx={{ fontSize: 30 }} /> Agendar Reunião
              </button>
              <Link
                className="!text-white !no-underline"
                href="https://api.whatsapp.com/send?phone=556598135436&text=Ol%C3%A1,%20quero%20falar%20com%20um%20especialista."
                target="_blank"
                rel="noreferrer"
              >
                <button className="py-3 px-9 sm:px-5 flex items-center justify-center gap-2 rounded-full bg-green-500 hover:bg-green-400 text-lg text-black font-bold transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-green-500/10 hover:shadow-green-500/30 active:shadow-green-500/10">
                  <WhatsAppIcon sx={{ fontSize: 30 }} /> Fale Conosco
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex gap-5 ">
            <div className="w-8 h-60 rounded-full shadow-lg shadow-black/30">
              <img
                src="https://img.freepik.com/fotos-gratis/conexao-de-rede-de-internet-de-negocios-globais-iot-internet-das-coisas-conceito-de-inteligencia-de-negocios-rede-global-de-negocios-fundo-de-tecnologia-futurista-ai-generative_1258-176775.jpg?w=740&t=st=1705934858~exp=1705935458~hmac=98bd3bd8f4350296678ea8a11c506c51a38f4275e62e51a68b161bd56f9edbe7"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-8 h-60 rounded-full mt-7">
              <img
                src="https://img.freepik.com/fotos-gratis/homem-usando-um-tablet-para-trabalhar-e-se-conectar-com-outras-pessoas_23-2149369110.jpg?w=740&t=st=1705934724~exp=1705935324~hmac=822145d765f8d04f025dee5a0bb1b4c45fccaad9840904e74abd99f09727781e"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-8 h-60 rounded-full shadow-lg shadow-black/30">
              <img
                src="https://img.freepik.com/fotos-gratis/pesquisador-usando-uma-tecnologia-futurista-de-tela-de-tablet-digital-transparente_53876-101147.jpg?w=740&t=st=1705934761~exp=1705935361~hmac=fc6e7e2f0fd8229d047924ef4a719f75e851c312795fd35aaf1f979775cdd7fe"
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
