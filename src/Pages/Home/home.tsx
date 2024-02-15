import { Container } from "@mui/material";
import { Session1 } from "../../components/Sessions/Session-1";
import { Header } from "../../components/Header";
import { Base } from "../../components/Base";
import { Session2 } from "../../components/Sessions/Session-2";
import Background from '../../assets/backgroundGrid.svg'
import { Session3 } from "../../components/Sessions/Session-3";
import { Session4 } from "../../components/Sessions/Session-4";
import { Session5 } from "../../components/Sessions/Session-5";
import { CarroselLogos } from "../../components/CarrosselLogos";
import { Footer } from "../../components/Footer";


export default function Home() {
  return (
    <div
      // className="bg-cover bg-no-repeat "
      // style={{ backgroundImage: `url(${Background})` }}
    >
      <Header />
      <Session1 />
      <CarroselLogos />
      <Session2 />
      <Session3 />
      <Session4 />
      <Session5 />
      <Footer />
    </div>
  );
}
