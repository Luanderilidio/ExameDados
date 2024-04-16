// @ts-nocheck

import EventAvailableIcon from "@mui/icons-material/EventAvailable";

import { Base } from "../../Base";
import Ilustration6 from "../../../assets/Ilustration6.svg";
import imageMan5 from "../../../assets/imageMan4.jpg"

export const Session7 = () => {
  return (
    <Base>
      <div className=" sm:grid grid-cols-12 gap-5 relative !font-Sora mb-28 px-4 ">
        <img
          src={Ilustration6}
          alt=""
          className="absolute -right-10 opacity-30 hidden"
        />

        <div className="col-span-6 border text-amber-800 border-amber-800 rounded-2xl p-10 bg-amber-300">
          <h1 className="text-3xl font-bold mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p>
            {" "}
            <span className="font-semibold text-xl ">1.</span> Lorem ipsum dolor
            sit amet consectetur adipisicing elit.
          </p>
          <p>
            <span className="font-semibold text-xl ">2.</span> Lorem ipsum dolor
            sit amet consectetur adipisicing elit.
          </p>
          <p>
            <span className="font-semibold text-xl ">3.</span> Lorem ipsum dolor
            sit amet consectetur adipisicing elit.
          </p>

          <p className="mt-5 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            excepturi, maiores adipisci non aspernatur dolores ipsa illo, vitae
            aliquam minima ab consequatur, molestiae nostrum facere neque. Iure
            dolore voluptas officia.
          </p>

          <button
            // onClick={handleOpen}
            className="w-fit py-3 px-5 mt-5 hidden sm:flex items-center justify-center gap-2 rounded-full  bg-white text-lg text-amber-800 font-bold transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-gray-500/10 hover:shadow-gray-500/20 active:shadow-gray-500/5"
          >
            Agendar uma Reunião
            <EventAvailableIcon sx={{ fontSize: 20 }} />
          </button>
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
