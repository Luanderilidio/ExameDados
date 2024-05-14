import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "../../assets/Ilustration12.png";
import Image1 from "../../assets/Image1.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CallMadeRoundedIcon from "@mui/icons-material/CallMadeRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { BootstrapDialog } from "../../utils/Transition";
import CloseIcon from "@mui/icons-material/Close";
import { useBoolean } from "react-hooks-shareable";

interface PropsCardProducts {
  name: React.ReactNode;
  description: string;
  content: React.ReactNode;
  image: string;

}

export default function CardProducts({ name, description, content, image }: PropsCardProducts) {
  const [currentValue1, setTrue1, setFalse1, toggleValue1] = useBoolean(false);
  const [currentValue2, setTrue2, setFalse2, toggleValue2] = useBoolean(false);

  return (
    <div
      className="!h-96 w-full border-red-500 transition ease-in-out relative bg-cover shadow-black/30 shadow-md active:shadow-lg rounded-xl p-5 flex flex-col justify-between gap-5"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute top-5 right-5 sm:hidden" onClick={setTrue2}>
        <div className="relative">
          <div className="absolute z-10 text-white overflow-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <PlayArrowRoundedIcon />
          </div>
          <Avatar
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaW1vNzNqbnJqdzUxdzhwcHBydmh3ZjNyNzZlYndsc2RsaTl6NGRldSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xThuWu82QD3pj4wvEQ/giphy.gif"
            sx={{ width: 70, height: 70 }}
          />
        </div>
      </div>
      <div className="absolute rounded-xl bg-gradient-to-t from-black via-black/40 to-transparent w-full h-full overflow-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <h1 className="text-white">
        {name}
      </h1>
      <div className="!z-10">
        <p className="text-sm text-left leading-tight text-white !z-10">
          {description}
        </p>
        <div className="!z-10 flex items-center justify-between mt-5">
          <button
            onClick={setTrue1}
            className="w-full rounded-lg transition ease-in-out hover:scale-105 active:scale-95 border-2 border-amber-500 text-amber-500 text-sm font-bold flex justify-between items-center"
          >
            <div className="bg-white h-full  border-x-4 border-l-white border-r-amber-500 rounded-lg">
              <CallMadeRoundedIcon sx={{ fontSize: 40 }} />
            </div>
            <div className="flex items-center">

              Saiba Mais
              <ChevronRightIcon sx={{ fontSize: 20 }} />{" "}
            </div>
            <div />
          </button>
        </div>
      </div>

      <BootstrapDialog
        onClose={setFalse1}
        aria-labelledby="customized-dialog-title"
        open={currentValue1}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {name}
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
          {content}
          
          {/* <Typography gutterBottom>
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
          </Typography> */}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={setFalse1}>
            Ok
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
