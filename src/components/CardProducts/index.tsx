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
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { BootstrapDialog } from "../../utils/Transition";
import CloseIcon from "@mui/icons-material/Close";
import { useBoolean } from "react-hooks-shareable";

interface PropsCardProducts {
  name: string;
  description: string;
  content: React.ReactNode;
  video: string;
  image: string;
}

export default function CardProducts() {
  const [currentValue1, setTrue1, setFalse1, toggleValue1] = useBoolean(false);
  const [currentValue2, setTrue2, setFalse2, toggleValue2] = useBoolean(false);

  return (
    <div
      className="h-80 border-red-500 transition ease-in-out relative bg-cover shadow-black/30 shadow-md active:shadow-lg rounded-xl p-5 flex flex-col justify-between gap-5"
      style={{
        backgroundImage: `url(${Image1})`,
      }}
    >
      <div className="absolute top-5 right-5" onClick={setTrue2}>
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
      <h1 className="w-fit text-5xl font-bold text-white z-10 rounded-full ">
        Branding
      </h1>
      <div className="!z-10">
        <p className="text-md text-left leading-snug text-white !z-10">
          Our web designers help you in designing an appealing and engaging
          website that is user-friendly and easily navigable.
        </p>
        <div className="!z-10 flex items-center justify-between mt-5">
          <div />
          {/* <div className="bg-green-500 p-2 rounded-xl">
          <FlashOnOutlinedIcon className="text-black" sx={{ fontSize: 30 }} />
        </div> */}
          <button
            onClick={setTrue1}
            className="transition ease-in-out hover:scale-105 active:scale-95 text-amber-500 text-sm font-bold"
          >
            Saiba Mais
            <ChevronRightIcon sx={{ fontSize: 20 }} />{" "}
          </button>
        </div>
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

      <Dialog
        maxWidth="lg"
        sx={{ borderRadius: 16 }}
        fullWidth
        open={currentValue2}
        onClose={setFalse2}
      >
        <iframe
          className="w-full h-[700px] rounded-2xl"
          src="https://youtube.com/shorts/r4wt06OYEX4?si=CRb54vLzjka76uCQ"
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // allowfullscreen
        />
      </Dialog>
    </div>
  );
}