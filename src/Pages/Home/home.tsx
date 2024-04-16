import { Container } from "@mui/material";
import { Session1 } from "../../components/Sessions/Session-1";
import { Header } from "../../components/Header";
import { Base } from "../../components/Base";
import Background from "../../assets/backgroundGrid.svg";
import { Session3 } from "../../components/Sessions/Session-3";
import { Session4 } from "../../components/Sessions/Session-4";
import { Session5 } from "../../components/Sessions/Session-5";
import { CarroselLogos } from "../../components/CarrosselLogos";
import { Footer } from "../../components/Footer";
import { Session2 } from "../../components/Sessions/Session-2/index2";
import { Session6 } from "../../components/Sessions/Session-6";
import { Session7 } from "../../components/Sessions/Session-7";

export default function Home() {
  return (
    <div
    // className="bg-cover bg-no-repeat "
    // style={{ backgroundImage: `url(${Background})` }}
    >
      <Header />
      <Session1 />
      <Session2 />
      <Session3 />
      <Session4 />
      <Session5 />
      <Session6 />
      <Session7 />
      <Footer />
    </div>
  );
}
