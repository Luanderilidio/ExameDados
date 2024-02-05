import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Base } from "../../Base";

import Ilustration1 from "../../../assets/Ilustration1.svg";
import Ilustration2 from "../../../assets/Ilustration2.svg";
import Ilustration3 from "../../../assets/Ilustration3.svg";
import Ilustration4 from "../../../assets/Ilustration4.svg";
import { Box, Dialog, Link, Modal, Typography } from "@mui/material";
import { styleModal } from "../../../utils/StyleModal";

export const Session1 = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Base>
      <div className="h-screen grid grid-cols-12 relative">
        <img
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
        />
        <div className=" col-span-12 flex flex-col items-center justify-center gap-4 ">
          <h1 className="font-Sora font-semibold text-center text-8xl">
            <span className="font-normal italic">
              <span className="text-9xl">F</span>ortalecendo
            </span>{" "}
            <br /> sua{" "}
            <span className="underline decoration-white	 text-amber-500 ">
              Idéia
            </span>{" "}
            com <br /> <span className="font-black">Ciência de Dados</span>
          </h1>
          <h1 className="font-normal text-center text-2xl">
            <span>
              <FiberManualRecordIcon
                className="text-amber-500"
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
              />
            </span>{" "}
            A educação é a chave{" "}
            <span>
              <FiberManualRecordIcon
                className="text-amber-500"
                sx={{ fontSize: 12 }}
              />
            </span>{" "}
            A pesquisa é o caminho{" "}
          </h1>
          <div className="flex gap-4 font-Sora">
            <button
              onClick={handleOpen}
              className="py-5 px-7 flex items-center justify-center gap-2 rounded-full  bg-amber-500 hover:bg-amber-400 text-2xl text-black font-bold transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-[#ffba3a]/10 hover:shadow-[#ffba3a]/20 active:shadow-[#ffba3a]/5"
            >
              Assista o vídeo <PlayCircleOutlineIcon sx={{ fontSize: 30 }} />
            </button>
            <Link className="!no-underline" href="https://api.whatsapp.com/send?phone=556598135436&text=Ol%C3%A1,%20quero%20falar%20com%20um%20especialista."
            target="_blank" rel="noreferrer">
            <button className="py-5 px-7 flex items-center justify-center gap-2 rounded-full bg-green-500 hover:bg-green-400 text-2xl text-black font-bold transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-green-500/10 hover:shadow-green-500/30 active:shadow-green-500/10">
              <WhatsAppIcon sx={{ fontSize: 30 }} /> Fale Conosco
            </button>
            </Link>
          </div>
        </div>
        {/* <div className="border col-span-6"></div> */}
      </div>
      {/* <Modal
        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          
        </Box>
      </Modal> */}
      <Dialog  maxWidth="lg" sx={{borderRadius: 24}} fullWidth open={open} onClose={handleClose}>
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
