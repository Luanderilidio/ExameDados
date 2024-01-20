import { Base } from "../../Base";
import Ilustration5 from "../../../assets/Ilustration5.svg";
import Ilustration6 from "../../../assets/Ilustration6.svg";
import Ilustration7 from "../../../assets/Ilustration7.svg";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

export const Session4 = () => {
  return (
    <Base>
      <div className="h-screen grid grid-cols-12 gap-10 relative !font-Sora">
        <img
          src={Ilustration6}
          alt=""
          className="absolute -left-10 opacity-30"
        />
        <img
          src={Ilustration7}
          alt=""
          className="absolute left-0 w-48 top-10 opacity-30"
        />
        <div className="col-span-7 flex  items-center justify-center flex-col  ">
          
        </div>
        <div className="col-span-5  flex gap-3 ">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-5xl font-normal font-Sora w-full text-right">
                Quem são <br /> nossos <span className="italic">Clientes</span>
              </h1>
              <p className="text-md font-normal opacity-80 mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
            </div>
            <img src={Ilustration5} alt="" className=" w-full opacity-30" />

            <button className="w-fit py-2 px-7 flex items-center justify-center gap-2 rounded-full  border-2 border-amber-500 border-dashed hover:bg-amber-500 text-amber-500 hover:text-black font-Sora font-semibold transition ease-in-out hover:scale-110 active:scale-95 shadow-xl shadow-[#ffba3a]/5 hover:shadow-[#ffba3a]/10 active:shadow-[#ffba3a]/5">
              Agendar Reunião
              <EventAvailableIcon sx={{ fontSize: 20 }} />
            </button>
            <div />
            <div />
          </div>
          <div className="w-10 h-20 bg-amber-600 rounded-full transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-[#ffba3a]/30 hover:shadow-[#ffba3a]/20 active:shadow-[#ffba3a]/5" />
        </div>
      </div>
    </Base>
  );
};
