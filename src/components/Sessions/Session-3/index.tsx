import { Base } from "../../Base";
import CloseIcon from "@mui/icons-material/Close";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import TrendingFlatRoundedIcon from "@mui/icons-material/TrendingFlatRounded";
import Image1 from "../../../assets/Image1.png";
import Image2 from "../../../assets/Image2.png";
import Image3 from "../../../assets/Image3.png";
import Image4 from "../../../assets/Image4.png";
import Ilustration6 from "../../../assets/Ilustration6.svg";
import Ilustration7 from "../../../assets/Ilustration7.svg";
import Ilustration8 from "../../../assets/Ilustration8.png";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { useBoolean } from "react-hooks-shareable";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { useMediaQuery } from "react-responsive";
import ReactMarkdown from "react-markdown";
import { markdownContent } from "./data";
import { BootstrapDialog, Transition } from "../../../utils/Transition";
import "swiper/css";
import "swiper/css/pagination";
import "../../../utils/Swiper.css";
import CardProducts from "../../CardProducts";


export const Session3 = () => {
  const [currentValue1, setTrue1, setFalse1, toggleValue1] = useBoolean(false);
  const [currentValue2, setTrue2, setFalse2, toggleValue2] = useBoolean(false);
  const [currentValue3, setTrue3, setFalse3, toggleValue3] = useBoolean(false);
  const [currentValue4, setTrue4, setFalse4, toggleValue4] = useBoolean(false);

  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });


  return (
    <Base>
      <div className="h-full grid grid-cols-2 gap-10 relative !font-Sora px-4 sm:px-0 mt-20">
        <img
          src={Ilustration6}
          alt=""
          className="absolute -left-10 hidden sm:block"
        />
        <img
          src={Ilustration7}
          alt=""
          className=" absolute right-0 w-48 top-10 hidden sm:block"
        />
        <div className="col-span-2">
          <h1 className="text-3xl sm:text-5xl font-normal font-Sora text-center ">
            Atuamos nas <br /> principais
            <span className="italic font-bold underline text-amber-500">
              Frentes
            </span>
          </h1>
        </div>

        <div className="col-span-2">
          <Swiper
            spaceBetween={20}
            slidesPerView={isMobile ? 1 : 4}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper "
          >
            {[1, 2, 3, 4].map((item: any, index): any => (
              <SwiperSlide>
                <CardProducts />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex gap-1 items-center justify-end">
            <div className="px-4 border-[1px] border-black/30 rounded-2xl">
              <TrendingFlatRoundedIcon className="text-black/30 rotate-180" />
            </div>
            <div className="px-4 border-[1px] border-black/30 rounded-2xl">
              <TrendingFlatRoundedIcon className="text-black/30" />
            </div>
          </div>
        </div>
        {/* <div className="col-span-2 sm:col-span-1 flex flex-col justify-between gap-10">
          <div className="flex flex-col sm:flex-row gap-5 ">
            <div className="rounded-t-2xl relative ">
              <img
                src={Ilustration8}
                className="absolute -right-3 -top-3"
                alt=""
              />
              <img
                src={Ilustration8}
                className="absolute -left-3 -bottom-3 rotate-180"
                alt=""
              />

              <div className="px-2 py-1 flex gap-1 items-center rounded-md absolute -bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#fa1818] text-[#ffffff] shadow-sm shadow-[#fa1818]/50  bg-opacity-40 backdrop-filter backdrop-blur-lg !z-50">
                <LocalFireDepartmentIcon sx={{ fontSize: 15 }} />
                <p className="text-sm font-Sora ">Em alta</p>
              </div>
              <div className="overflow-hidden rounded-2xl w-full  ">
                <img
                  className=" w-full hover:scale-110 transition duration-500 cursor-pointer !object-cover rounded-t-2xl "
                  src={Image1}
                />
              </div>
            </div>
            <div className="flex flex-col justify-start gap-3">
              <h1 className="text-3xl font-bold">
                <span className="text-5xl font-light underline text-amber-500">
                  P
                </span>
                olítica
              </h1>
              <p className="font-light text-sm text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                beatae voluptate, inventore non officiis recusandae cupiditate
                voluptatibus a saepe unde laborum sunt consequatur harum
                consectetur odio. Nemo vitae quos eius.
              </p>
              <div className="flex items-center justify-end">
                <button onClick={setTrue1} className="w-fit font-bold text-sm flex items-center justify-end text-amber-600 transition ease-in-out hover:scale-110 active:scale-95">
                  Saiba Mais
                  <ChevronRightIcon sx={{ fontSize: 20 }} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="rounded-t-2xl relative">
              <img
                src={Ilustration8}
                className="absolute -right-3 -top-3"
                alt=""
              />
              <img
                src={Ilustration8}
                className="absolute -left-3 -bottom-3 rotate-180"
                alt=""
              />
              <div className="overflow-hidden rounded-2xl w-full  ">
                <img
                  className="w-full hover:scale-110 transition duration-500 cursor-pointer !object-cover rounded-t-2xl "
                  src={Image2}
                />
              </div>
            </div>
            <div className="flex flex-col justify-start gap-3">
              <h1 className="text-3xl font-bold">
                <span className="text-5xl font-light underline text-amber-500">
                  S
                </span>
                ocioeconômia
              </h1>
              <p className="font-light text-sm text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                beatae voluptate, inventore non officiis recusandae cupiditate
                voluptatibus a saepe unde laborum sunt consequatur harum
                consectetur odio. Nemo vitae quos eius.
              </p>
              <div className="flex items-center justify-end">
                <button onClick={setTrue2} className="w-fit font-bold text-sm flex items-center justify-end text-amber-600 transition ease-in-out hover:scale-110 active:scale-95">
                  Saiba Mais
                  <ChevronRightIcon sx={{ fontSize: 20 }} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1 flex flex-col justify-between gap-10">
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="rounded-t-2xl relative">
              <img
                src={Ilustration8}
                className="absolute -right-3 -top-3"
                alt=""
              />
              <img
                src={Ilustration8}
                className="absolute -left-3 -bottom-3 rotate-180"
                alt=""
              />
              <div className="overflow-hidden rounded-2xl w-full  ">
                <img
                  className="w-full hover:scale-110 transition duration-500 cursor-pointer !object-cover rounded-t-2xl "
                  src={Image3}
                />
              </div>
            </div>
            <div className="flex flex-col justify-start gap-3">
              <h1 className="text-3xl font-bold">
                <span className="text-5xl font-light underline text-amber-500">
                  M
                </span>
                ercado
              </h1>
              <p className="font-light text-sm text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                beatae voluptate, inventore non officiis recusandae cupiditate
                voluptatibus a saepe unde laborum sunt consequatur harum
                consectetur odio. Nemo vitae quos eius.
              </p>
              <div className="flex items-center justify-end">
                <button onClick={setTrue3} className="w-fit font-bold text-sm flex items-center justify-end text-amber-600 transition ease-in-out hover:scale-110 active:scale-95">
                  Saiba Mais
                  <ChevronRightIcon sx={{ fontSize: 20 }} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="rounded-t-2xl relative">
              <img
                src={Ilustration8}
                className="absolute -right-3 -top-3"
                alt=""
              />
              <img
                src={Ilustration8}
                className="absolute -left-3 -bottom-3 rotate-180"
                alt=""
              />
              <div className="overflow-hidden rounded-2xl w-full  ">
                <img
                  className="w-full hover:scale-110 transition duration-500 cursor-pointer !object-cover rounded-t-2xl "
                  src={Image4}
                />
              </div>
            </div>
            <div className="flex flex-col justify-start gap-3">
              <h1 className="text-3xl font-bold">
                <span className="text-5xl font-light underline text-amber-500">
                  A
                </span>
                gronegócio
              </h1>
              <p className="font-light text-sm text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                beatae voluptate, inventore non officiis recusandae cupiditate
                voluptatibus a saepe unde laborum sunt consequatur harum
                consectetur odio. Nemo vitae quos eius.
              </p>
              <div className="flex items-center justify-end">
                <button onClick={setTrue4} className="w-fit font-bold text-sm flex items-center justify-end text-amber-600 transition ease-in-out hover:scale-110 active:scale-95">
                  Saiba Mais
                  <ChevronRightIcon sx={{ fontSize: 20 }} />
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <BootstrapDialog
        onClose={setFalse1}
        aria-labelledby="customized-dialog-title"
        open={currentValue1}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Política
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={setFalse1}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <br />
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <br />
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={setFalse1}>
            Ok
          </Button>
        </DialogActions>
      </BootstrapDialog>

      <BootstrapDialog
        onClose={setFalse2}
        aria-labelledby="customized-dialog-title"
        open={currentValue2}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Socioeconomia
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={setFalse2}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <br />
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <br />
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={setFalse2}>
            Ok
          </Button>
        </DialogActions>
      </BootstrapDialog>

      <BootstrapDialog
        onClose={setFalse3}
        aria-labelledby="customized-dialog-title"
        open={currentValue3}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Mercado
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={setFalse3}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <br />
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <br />
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={setFalse3}>
            Ok
          </Button>
        </DialogActions>
      </BootstrapDialog>

      <BootstrapDialog
        onClose={setFalse4}
        aria-labelledby="customized-dialog-title"
        open={currentValue4}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Agronegócio
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={setFalse4}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <br />
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <br />
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={setFalse4}>
            Ok
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Base>
  );
};
