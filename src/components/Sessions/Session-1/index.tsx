import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Base } from "../../Base";

import Ilustration1 from "../../../assets/Ilustration1.svg";
import Ilustration2 from "../../../assets/Ilustration2.svg";
import Ilustration3 from "../../../assets/Ilustration3.svg";
import Ilustration10 from "../../../assets/Ilustration10.png";
import Ilustration12 from "../../../assets/Ilustration12.png";
import Ilustration13 from "../../../assets/Ilustration13.png";
import Ilustration14 from "../../../assets/Ilustration14.png";
import Ilustration15 from "../../../assets/Ilustration15.png";
import ImageMan from "../../../assets/imageMan2.png";
import Cardzin1 from "../../../assets/Cardzin1.png";
import Cardzin2 from "../../../assets/Cardzin2.png";
import Cardzin3 from "../../../assets/Cardzin3.svg";
import Cardzin5 from "../../../assets/Cardzin7.svg";
import { Box, Dialog, Link, Modal, Typography } from "@mui/material";
import { styleModal } from "../../../utils/StyleModal";
import { RadarChart } from "../../Charts/RadarChart";
import { LineArea } from "../../Charts/LineAreaChart";
import { CarroselLogos } from "../../CarrosselLogos";

export const Session1 = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Base>
      <div className="h-screen grid grid-cols-12 relative p-4">
        {/* <img
          src={Ilustration1}
          alt=""
          className="absolute right-0 top-20 w-20 opacity-20"
        />
        <img
          src={Ilustration2}
          alt=""
          className="absolute left-0 top-36 w-28 opacity-20"
        />
        <img
          src={Ilustration3}
          alt=""
          className="absolute right-0 bottom-64 w-16 opacity-10"
        />
        <img
          src={Ilustration4}
          alt=""
          className="absolute left-20 bottom-36 w-32 opacity-30"
        /> */}

        <div className="col-span-12 sm:col-span-6 flex flex-col items-start justify-center gap-4">
          <h1 className="font-Sora font-semibold text-center sm:text-left text-2xl sm:text-5xl ">
            {/* <span className="font-normal italic">
              <span className="text-9xl">F</span>ortalecendo
            </span>{" "}
            <br /> sua{" "}
            <span className="underline decoration-white	 text-amber-500 ">
              Idéia
            </span>{" "}
            com <span className="font-black">Ciência de Dados</span> */}
            Você já se questionou sobre o que seus clientes realmente pensam
            sobre a sua empresa?
          </h1>

          <div className="hidden sm:flex gap-4 font-Sora">
            <button
              // onClick={handleOpen}
              className="py-3 px-5  flex items-center justify-center gap-2 rounded-full  bg-gray-300 hover:bg-gray-200 text-lg text-gray-700 font-bold transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-gray-500/10 hover:shadow-gray-500/20 active:shadow-gray-500/5"
            >
              Saiba mais <InfoIcon sx={{ fontSize: 30 }} />
            </button>
            <Link
              className="!no-underline"
              href="https://api.whatsapp.com/send?phone=556598135436&text=Ol%C3%A1,%20quero%20falar%20com%20um%20especialista."
              target="_blank"
              rel="noreferrer"
            >
              <button className="py-3 px-5  flex items-center justify-center gap-2 rounded-full bg-green-500 hover:bg-green-400 text-lg text-green-900 font-bold transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-green-500/10 hover:shadow-green-500/30 active:shadow-green-500/10">
                <WhatsAppIcon sx={{ fontSize: 30 }} /> Fale Conosco
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 flex flex-col items-center justify-end relative ">
          <img
            src={ImageMan}
            alt=""
            className="rounded-md drop-shadow w-9/12 sm:w-11/12"
          />
          <button
            onClick={handleOpen}
            className="py-3 px-5 w-full flex items-center justify-start gap-2 rounded-full  bg-amber-400 hover:bg-amber-500 text-lg text-black font-bold transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-[#ffba3a]/10 hover:shadow-[#ffba3a]/20 active:shadow-[#ffba3a]/5"
          >
            <p className="!whitespace-no-wrap text-amber-800 text-sm">
              Assista o vídeo
            </p>
            <PlayCircleOutlineIcon sx={{ fontSize: 30, color: "#9a3412" }} />
            <div className=" w-6/12 sm:w-8/12 h-[1px] bg-amber-800" />
          </button>
          <img
            src={Cardzin1}
            alt=""
            className="w-20 sm:w-28 rounded-md drop-shadow absolute top-3 sm:top-10 right-0"
          />
          <img
            src={Cardzin2}
            alt=""
            className="w-20 sm:w-22 rounded-md drop-shadow absolute bottom-52 left-0"
          />
          <img
            src={Cardzin3}
            alt=""
            className="w-40 rounded-md drop-shadow absolute bottom-20 right-0"
          />
          <img
            src={Cardzin5}
            alt=""
            className="w-28 rounded-md drop-shadow absolute bottom-20 left-5 sm:left-10"
          />
          <img
            src={Ilustration10}
            alt=""
            className=" rounded-md drop-shadow absolute -bottom-10 right-0 -z-10"
          />
        </div>
        <div className="sm:hidden col-span-12 grid grid-cols-2  gap-4 mt-5">
          <div className="flex flex-col items-start justify-center gap-2 p-3 rounded-xl bg-amber-300">
            <img src={Ilustration12} className="w-9" />
            <p className="text-xl text-amber-800 font-semibold leading-none">
              Conhecimento <br /> é poder
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-2 p-3 rounded-xl bg-amber-300">
            <img src={Ilustration13} className="w-9" />
            <p className="text-xl text-amber-800 font-semibold leading-none">
              Informação é libertadora
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-2 p-3 rounded-xl bg-amber-300">
            <img src={Ilustration15} className="w-9" />
            <p className="text-xl text-amber-800 font-semibold leading-none">
              A pesquisa é o caminho
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-2 p-3 rounded-xl bg-amber-300">
            <img src={Ilustration14} className="w-9" />
            <p className="text-xl text-amber-800 font-semibold leading-none">
              A educação é a chave
            </p>
          </div>
        </div>

        <div className="hidden sm:block col-span-12 mt-5">
          <h1 className="font-normal text-center text-2xl">
            <span>
              <FiberManualRecordIcon
                className="text-amber-600"
                sx={{ fontSize: 12 }}
              />
            </span>{" "}
            O conhecimento é poder{" "}
            <span>
              <FiberManualRecordIcon
                className="text-amber-500"
                sx={{ fontSize: 12 }}
              />
            </span>{" "}
            A informação é libertadora{" "}
            <span>
              <FiberManualRecordIcon
                className="text-amber-500"
                sx={{ fontSize: 12 }}
              />{" "}
                A pesquisa é o caminho{" "}
            </span>{" "}
            <span>
              <FiberManualRecordIcon
                className="text-amber-500"
                sx={{ fontSize: 12 }}
              />
            </span>{" "}
            A educação é a chave
          </h1>
        </div>
        <div className="col-span-12 mt-5"></div>
      </div>

      <Dialog
        maxWidth="lg"
        sx={{ borderRadius: 24 }}
        fullWidth
        open={open}
        onClose={handleClose}
      >
        <iframe
          className="w-full h-[200px] sm:h-[700px]"
          src="https://www.youtube.com/embed/8fr2vXFlvfA?si=6QzG_MXDyQGBNWjc"
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // allowfullscreen
        />
      </Dialog>
    </Base>
  );
};
