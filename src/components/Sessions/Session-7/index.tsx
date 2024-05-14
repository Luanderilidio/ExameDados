// @ts-nocheck

import EventAvailableIcon from "@mui/icons-material/EventAvailable";

import { Base } from "../../Base";
import Ilustration6 from "../../../assets/Ilustration6.svg";
import imageMan5 from "../../../assets/imageMan4.jpg"
import { Link } from "@mui/material";

export const Session7 = () => {
  return (
    <Base>
      <div className=" sm:grid grid-cols-12 gap-5 relative !font-Sora mb-28 px-4 ">
        <img
          src={Ilustration6}
          alt=""
          className="absolute -right-10 opacity-30 hidden"
        />

        <div className="col-span-6 border text-white border-amber-800 rounded-2xl p-10 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-400">
          <h1 className="text-2xl font-bold mb-5">

          Entre em contato conosco hoje mesmo!
          </h1>
          <p>
            {" "}
            <span className="font-semibold text-xl ">1.</span> 
            Dados impulsionam o sucesso.

          </p>
          <p>
            <span className="font-semibold text-xl ">2.</span> 
            Oferecemos insights estratégicos.
          </p>
          <p>
            <span className="font-semibold text-xl ">3.</span> 
            Lideramos em inovação e excelência.
          </p>

          <p className="mt-5 text-xs">
          A Exame Dados está na vanguarda da transformação, capacitando empresas para prosperarem no mundo orientado por dados.
          </p>

          <Link
            className="!no-underline"
            href="https://api.whatsapp.com/send?phone=5565981354369&text=Ol%C3%A1,%20quero%20falar%20com%20um%20especialista."
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="w-fit py-3 px-5 mt-5 hidden sm:flex items-center justify-center gap-2 rounded-full  bg-white text-lg text-amber-800 font-bold transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-gray-500/10 hover:shadow-gray-500/20 active:shadow-gray-500/5"
            >
              Agendar uma Reunião
              <EventAvailableIcon sx={{ fontSize: 20 }} />
            </button>

          </Link>
        </div>
        <div
          className="col-span-6 border rounded-2xl bg-cover shadow-black/30 drop-shadow-xl "
          style={{
            backgroundImage: `url(${imageMan5})`,
          }}
        ></div>
      </div>
    </Base>
  );
};
