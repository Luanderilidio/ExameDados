import { Base } from "../Base";
import Logo from "../../assets/ExameDadosLogo.svg";
import Logo2 from "../../assets/ExameDadosLogoV2.svg";
import Ilustration10 from "../../assets/Ilustration10.svg";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from "react-responsive";





export const Header = () => {
  
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })


  return (
    <Base className="border-b border-black/20 relative ">
      
      <div className="w-full grid grid-cols-12  py-5 sm:py-2">
        <div className="col-span-12 flex items-center justify-between">
          <img src={isMobile ? Logo2 : Logo} alt="" className="w-2/4 sm:w-14" />
          <div className="hidden sm:flex gap-10 font-Sora font-light  ">
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

          <button
              className="w-fit py-3 px-5 hidden  sm:flex items-center justify-center gap-2 rounded-full  bg-amber-300 hover:bg-amber-400 text-lg text-amber-800 font-bold transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-gray-500/10 hover:shadow-gray-500/20 active:shadow-gray-500/5"
            >
              Agende uma Reunião
              <EventAvailableIcon sx={{ fontSize: 20 }} />

            </button>
            <MenuIcon className="text-2xl" sx={{fontSize: 40}} />
        </div>
      </div>
      {/* <img src={Ilustration10} className="absolute left-0 -bottom-5 opacity-30" /> */}
    </Base>
  );
};
