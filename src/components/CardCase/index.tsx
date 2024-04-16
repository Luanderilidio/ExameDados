import Ilustration8 from "../../assets/Ilustration8.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { BootstrapDialog } from "../../utils/Transition";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { useBoolean } from "react-hooks-shareable";
import CloseIcon from "@mui/icons-material/Close";


interface PropsCase {
  image: string;
  title: string;
  subtitle: string;
  content: React.ReactNode;
  brand: string;
}

export const CardCase = ({ image, title, subtitle, content, brand }: PropsCase) => {
  const [currentValue1, setTrue1, setFalse1, toggleValue1] = useBoolean(false);
  const [currentValue2, setTrue2, setFalse2, toggleValue2] = useBoolean(false);

  return (
    <div
      className="flex flex-col relative"
      onMouseEnter={setTrue2}
      onMouseLeave={setFalse2}
    >
      <div
        className={`animate__animated  animate__fast ${
          currentValue2 ? "animate__backInRight" : "animate__fadeOutRightBig"
        } w-20 h-10 top-44 right-4 !z-10  absolute`}
      >
        <img src={brand} alt="" className="rounded-md" />
      </div>

      <div className=" w-80 h-60 transition-all ease-in-out duration-500 shadow-lg shadow-black/30 hover:shadow-amber-500/40 border-amber-500/50 border-dashed border-0 overflow-hidden relative rounded-3xl ">
        <img
          className="w-full h-full hover:scale-125 transition duration-1000"
          src={image}
          alt=""
        />
      </div>

      <h1 className="text-left font-Sora text-sm font-bold text-amber-600 mt-5">
        {title}
      </h1>
      <h1 className="text-left font-Sora text-3xl font-bold mt-3">
        {subtitle}
      </h1>
      <div className="flex items-center justify-end">
        <button
          onClick={setTrue1}
          className="w-fit font-bold text-sm flex items-center justify-end text-amber-600 transition ease-in-out hover:scale-110 active:scale-95"
        >
          Saiba Mais
          <ChevronRightIcon sx={{ fontSize: 20 }} />
        </button>
      </div>

      <BootstrapDialog
        onClose={setFalse1}
        aria-labelledby="customized-dialog-title"
        open={currentValue1}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {title}
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
        <DialogContent dividers>{content}</DialogContent>
        <DialogActions>
          <Button autoFocus onClick={setFalse1}>
            Ok
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};
