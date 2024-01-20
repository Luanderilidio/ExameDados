import { Container } from "@mui/material";
import { Session1 } from "../../components/Sessions/Session-1";
import { Header } from "../../components/Header";
import { Base } from "../../components/Base";
import { Session2 } from "../../components/Sessions/Session-2";

export default function Home() {
  return (
    <div
      className="bg-cover bg-no-repeat "
      style={{ backgroundImage: 'url("src/assets/backgroundGrid.svg")' }}
    >
      <Header />
      <Session1 />
      <Session2 />
    </div>
  );
}
