import { Base } from "../Base";
import Logo from "../../assets/ExameDadosLogo.svg";
import Ilustration10 from "../../assets/Ilustration10.svg";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

export const Header = () => {
  return (
    <Base className="border-b border-dashed border-white/10 relative">
      
      <div className="w-full grid grid-cols-12  py-2">
        <div className="col-span-12 flex items-center justify-between">
          <img src={Logo} alt="" className="w-14" />
          <div className="flex gap-10 font-Sora font-light  ">
            <button className="transition ease-in-out hover:font-bold hover:text-[#ffba3a] hover:scale-105 active:scale-95">
              Soluções
            </button>
            <button className="transition ease-in-out hover:font-bold hover:text-[#ffba3a] hover:scale-105 active:scale-95">
              {" "}
              Produtos
            </button>
            <button className="transition ease-in-out hover:font-bold hover:text-[#ffba3a] hover:scale-105 active:scale-95">
              Clientes
            </button>
            <button className="transition ease-in-out hover:font-bold hover:text-[#ffba3a] hover:scale-105 active:scale-95">
              Sobre
            </button>
            <button className="transition ease-in-out hover:font-bold hover:text-[#ffba3a] hover:scale-105 active:scale-95">
              Cases
            </button>
            <button className="transition ease-in-out hover:font-bold hover:text-[#ffba3a] hover:scale-105 active:scale-95">
              Contato
            </button>
          </div>

          <button className="py-2 px-7 flex items-center justify-center gap-2 rounded-full bg-[#ffba3a] hover:bg-[#ffcc6e] text-black font-bold transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-[#ffba3a]/5 hover:shadow-[#ffba3a]/10 active:shadow-[#ffba3a]/5">
            Agendar Reunião
            <EventAvailableIcon sx={{ fontSize: 20 }} />
          </button>
        </div>
      </div>
      {/* <img src={Ilustration10} className="absolute left-0 -bottom-5 opacity-30" /> */}
    </Base>
  );
};
