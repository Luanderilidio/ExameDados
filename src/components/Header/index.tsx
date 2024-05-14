import { useState } from "react";
import { Base } from "../Base";
import Logo from "../../assets/ExameDadosLogo.svg";
import Logo2 from "../../assets/ExameDadosLogoV2.svg";
import Ilustration10 from "../../assets/Ilustration10.svg";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import DraftsIcon from "@mui/icons-material/Drafts";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import InfoIcon from "@mui/icons-material/Info";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MenuIcon from "@mui/icons-material/Menu";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import { useMediaQuery } from "react-responsive";
import {
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Menu,
  MenuItem,
} from "@mui/material";

export const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const [open, setOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(open);
    };

  return (
    <Base className="border-b border-black/20 relative px-5">
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

          <Link
            className="!no-underline"
            href="https://api.whatsapp.com/send?phone=5565981354369&text=Ol%C3%A1,%20quero%20falar%20com%20um%20especialista."
            target="_blank"
            rel="noreferrer"
          >

            <button className="w-fit py-3 px-5 hidden  sm:flex items-center justify-center gap-2 rounded-full  bg-amber-300 hover:bg-amber-400 text-lg text-amber-800 font-bold transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-gray-500/10 hover:shadow-gray-500/20 active:shadow-gray-500/5">
              Agende uma Reunião
              <EventAvailableIcon sx={{ fontSize: 20 }} />
            </button>
          </Link>
          <button onClick={toggleDrawer(true)} className="sm:hidden">
            <IconButton className="">
              <MenuIcon
                className="text-2xl text-amber-6 00"
                sx={{ fontSize: 40 }}
              />
            </IconButton>
          </button>
          {/* <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Soluções</MenuItem>
            <MenuItem onClick={handleClose}>Produtos</MenuItem>
            <MenuItem onClick={handleClose}>Clientes</MenuItem>
            <MenuItem onClick={handleClose}>Sobre</MenuItem>
            <MenuItem onClick={handleClose}>Cases</MenuItem>
            <MenuItem onClick={handleClose}>Contato</MenuItem>
            <MenuItem>
              <button className="w-fit py-3 px-5 hidden  sm:flex items-center justify-center gap-2 rounded-full  bg-amber-300 hover:bg-amber-400 text-lg text-amber-800 font-bold transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-gray-500/10 hover:shadow-gray-500/20 active:shadow-gray-500/5">
                Agende uma Reunião
                <EventAvailableIcon sx={{ fontSize: 20 }} />
              </button>
            </MenuItem>
          </Menu> */}

          <Drawer
            anchor="right"
            open={open}
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              maxWidth: 380,
              bgcolor: "background.paper",
            }}

            onClose={toggleDrawer(false)}
          >
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader
                  className="font-Sora"
                  component="div"
                  id="nested-list-subheader"
                >
                  <p className="!font-semibold font-Sora">Saiba mais sobre</p>
                </ListSubheader>
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <TroubleshootIcon className="text-amber-600" />
                </ListItemIcon>
                <p className="!font-semibold font-Sora">Soluções</p>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <QueryStatsIcon className="text-amber-600" />
                </ListItemIcon>
                <p className="!font-semibold font-Sora">Produtos</p>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <GroupAddIcon className="text-amber-600" />
                </ListItemIcon>
                <p className="!font-semibold font-Sora">Clientes</p>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <AccountTreeIcon className="text-amber-600" />
                </ListItemIcon>
                <p className="!font-semibold font-Sora">Cases</p>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <InfoIcon className="text-amber-600" />
                </ListItemIcon>
                <p className="!font-semibold font-Sora">Sobre</p>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <AddIcCallIcon className="text-amber-600" />
                </ListItemIcon>
                <p className="!font-semibold font-Sora">Contato</p>
              </ListItemButton>
            </List>
            <div className="flex items-center flex-col gap-2 mt-36 p-3">
              <img className="w-20 " src={Logo} />
              <Link
                className="!no-underline"
                href="https://api.whatsapp.com/send?phone=5565981354369&text=Ol%C3%A1,%20quero%20falar%20com%20um%20especialista."
                target="_blank"
                rel="noreferrer"
              >

                <button className="w-fit py-3 px-5   sm:flex items-center justify-center rounded-full  bg-amber-300 hover:bg-amber-400 text-sm text-amber-800 font-bold transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-gray-500/10 hover:shadow-gray-500/20 active:shadow-gray-500/5">
                  Agende uma Reunião
                  <EventAvailableIcon sx={{ fontSize: 20 }} />
                </button>
              </Link>
            </div>
          </Drawer>
        </div>
      </div>
      {/* <img src={Ilustration10} className="absolute left-0 -bottom-5 opacity-30" /> */}
    </Base>
  );
};
