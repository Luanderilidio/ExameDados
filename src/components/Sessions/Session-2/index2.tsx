import { Base } from "../../Base";
import ImageMan3 from "../../../assets/imageMan3.png";
import Ilustration6 from "../../../assets/Ilustration6.svg";
import Ilustration7 from "../../../assets/Ilustration7.svg";

import Cardizin4 from "../../../assets/Cardzin4.svg";
import Cardizin5 from "../../../assets/Cardzin5.svg";
import Cardizin6 from "../../../assets/Cardzin6.svg";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

export const Session2 = () => {
  return (
    <Base>
      <div className="grid grid-cols-2 gap-10 relative !font-Sora p-4 sm:p-0">
      <img
          src={Ilustration6}
          alt=""
          className="absolute -right-10 hidden sm:block "
        />
        <img
          src={Ilustration7}
          alt=""
          className=" absolute left-0 w-48 -bottom-14 rotate-180 hidden sm:block"
        />
        <div className="col-span-2 sm:col-span-1 ">
          <div className="flex gap-2">
            <div className="w-2 sm:w-3 sm:h-20 bg-amber-500 rounded-full transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-[#ffba3a]/30 hover:shadow-[#ffba3a]/20 active:shadow-[#ffba3a]/5" />

            <h1 className="text-3xl sm:text-5xl font-normal font-Sora w-full">
              Quem <span className="italic">Somos</span>
            </h1>
          </div>
          <p className="text-md font-normal opacity-80 mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          <div className="relative flex flex-col items-center ">
              <img src={ImageMan3} alt="" className="w-80 sm:w-full" />
              <img
                src={Cardizin4}
                alt=""
                className=" w-24 sm:w-32 absolute top-2 sm:top-0 left-5 "
              />
              <img
                src={Cardizin5}
                alt=""
                className=" w-44 absolute left-0 bottom-14 sm:bottom-14 "
              />
              <img
                src={Cardizin6}
                alt=""
                className="w-24 sm:w-28 absolute top-0 right-5 "
              />
              <button
                // onClick={handleOpen}
                className="w-fit py-3 px-5  flex items-center justify-center gap-2 rounded-full  bg-amber-300 hover:bg-amber-400 text-md sm:text-lg text-amber-800 font-bold transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-gray-500/10 hover:shadow-gray-500/20 active:shadow-gray-500/5"
              >
                Agende uma Reunião
                <EventAvailableIcon sx={{ fontSize: 20 }} />
              </button>
            </div>
        </div>
        <div className="col-span-2 sm:col-span-1 text-md sm:text-lg">
        <p className=" font-normal opacity-80 mt-5 p-5 border-2 rounded-3xl border-dashed transition-all duration-300 ease-in-out border-amber-300 hover:border-amber-600 shadow-xl hover:shadow-amber-500/10 hover:scale-105 ">
            <span className="font-bold text-amber-600">Somos</span>{" "}
            especialistas em pesquisa de mercado, empresarial e de opinião,
            direcionados para assessoria política, mídias, tendências e data
            science.
          </p>
          <p className=" font-normal opacity-80 mt-5 p-5 border-2 rounded-3xl border-dashed transition-all duration-300	 ease-in-out border-amber-300 hover:border-amber-600 shadow-xl hover:shadow-amber-500/10 hover:scale-105 ">
            <span className="font-bold text-amber-600">Operamos</span> nos
            setores público e privado, proporcionando soluções abrangentes e
            adaptáveis às necessidades de nossos clientes.
          </p>
          <p className="font-normal opacity-80 mt-5 p-5 border-2 rounded-3xl border-dashed transition-all duration-300	 ease-in-out border-amber-300 hover:border-amber-600 shadow-xl hover:shadow-amber-500/10 hover:scale-105 ">
            <span className="font-bold text-amber-600">Nossa</span> equipe
            altamente especializada coleta dados e os transforma em relatórios
            inteligentes (dashboards) de leitura fácil.
          </p>
          <p className="font-normal opacity-80 mt-5 p-5 border-2 rounded-3xl border-dashed transition-all duration-300	 ease-in-out border-amber-300 hover:border-amber-600 shadow-xl hover:shadow-amber-500/10 hover:scale-105 ">
            <span className="font-bold text-amber-600">Utilizamos</span> métodos
            e softwares de mercado atualizados, garantindo uma abordagem
            dinâmica e eficaz para atender às diversas demandas dos nossos
            clientes.
          </p>
        </div>
      </div>
    </Base>
  );
};
