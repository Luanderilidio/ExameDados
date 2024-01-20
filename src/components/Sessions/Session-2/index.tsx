import { Base } from "../../Base";
import Ilustration5 from "../../../assets/Ilustration5.svg";
import Ilustration6 from "../../../assets/Ilustration6.svg";
import Ilustration7 from "../../../assets/Ilustration7.svg";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

export const Session2 = () => {
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
          className="absolute right-0 w-48 top-10 opacity-30"
        />

        <div className="col-span-5  flex gap-3 ">
          <div className="w-10 h-20 bg-amber-600 rounded-full transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-[#ffba3a]/30 hover:shadow-[#ffba3a]/20 active:shadow-[#ffba3a]/5" />
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-5xl font-normal font-Sora w-full">
                Quem <span className="italic">Somos</span>
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
        </div>
        <div className="col-span-7 flex  items-center justify-center flex-col  ">
          <p className="text-lg font-normal opacity-80 mt-5 p-5 border-2 rounded-3xl border-dashed transition-all duration-300 ease-in-out hover:border-amber-600 shadow-xl hover:shadow-amber-500/10 hover:scale-105 ">
            <span className="font-bold text-amber-500">Somos</span>{" "}
            especialistas em pesquisa de mercado, empresarial e de opinião,
            direcionados para assessoria política, mídias, tendências e data
            science.
          </p>
          <p className="text-lg font-normal opacity-80 mt-5 p-5 border-2 rounded-3xl border-dashed transition-all duration-300	 ease-in-out hover:border-amber-600 shadow-xl hover:shadow-amber-500/10 hover:scale-105 ">
            <span className="font-bold text-amber-500">Operamos</span> nos
            setores público e privado, proporcionando soluções abrangentes e
            adaptáveis às necessidades de nossos clientes.
          </p>
          <p className="text-lg font-normal opacity-80 mt-5 p-5 border-2 rounded-3xl border-dashed transition-all duration-300	 ease-in-out hover:border-amber-600 shadow-xl hover:shadow-amber-500/10 hover:scale-105 ">
            <span className="font-bold text-amber-500">Nossa</span> equipe
            altamente especializada coleta dados e os transforma em relatórios
            inteligentes (dashboards) de leitura fácil.
          </p>
          <p className="text-lg font-normal opacity-80 mt-5 p-5 border-2 rounded-3xl border-dashed transition-all duration-300	 ease-in-out hover:border-amber-600 shadow-xl hover:shadow-amber-500/10 hover:scale-105 ">
            <span className="font-bold text-amber-500">Utilizamos</span> métodos
            e softwares de mercado atualizados, garantindo uma abordagem
            dinâmica e eficaz para atender às diversas demandas dos nossos
            clientes.
          </p>
        </div>
      </div>
    </Base>
  );
};
