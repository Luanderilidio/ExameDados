// @ts-nocheck

import { Avatar, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useBoolean } from "react-hooks-shareable";
import { StyledBadge } from "../../utils/StyleBadge";
import "animate.css";

interface PropsCardCEO {
  name: String;
  avatar: String;
  photo: String;
  office: String;
  specialties: String[];
  instagram: String;
  linkedin: String;
  text: String;
}

export default function CardCEO({
  name,
  office,
  specialties,
  instagram,
  linkedin,
  avatar,
  photo,
  text,
}: PropsCardCEO) {
  const [currentValue, setTrue, setFalse, toggleValue] = useBoolean(false);

  return (
    <div
      onMouseEnter={setTrue}
      onMouseLeave={setFalse}
      className="shadow-black/30 !relative shadow-xl rounded-2xl p-5 h-96 bg-cover flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(${photo})`,
      }}
    >
      <div
        className={`animate__animated  animate__fast ${
          currentValue ? "animate__fadeIn" : "animate__fadeOut"
        } w-full h-full rounded-2xl flex items-center bg-black/90 p-5 absolute overflow-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <p className="w-full text-sm text-center text-white mb-16">{text}</p>
      </div>
      <div />

      <div className="w-full z-10">
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar src={avatar} sx={{ width: 30, height: 30 }} />
        </StyledBadge>
        <div className="flex justify-between items-center  mt-1 ">
          <div className="">
            <h1 className="font-semibold text-white leading-none text-left">
              {name}
            </h1>
            <h1 className="font-normal text-xs text-white leading-none text-left">
              {office}
            </h1>
          </div>
          <div className="w-fit flex items-center justify-end gap-2 text-white">
            <div className="transition-all ease-in-out hover:scale-110 active:scale-95 ">
              <Link
                href={linkedin}
                underline="none"
                target="_blank"
                rel="noopener"
              >
                <LinkedInIcon className="text-white" />
              </Link>
            </div>
            <div className="transition-all ease-in-out hover:scale-110 active:scale-95 ">
              <Link
                href={instagram}
                underline="none"
                target="_blank"
                rel="noopener"
              >
                <InstagramIcon className="text-white" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/5 h-1 bg-amber-500 rounded-full transition mt-2 ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-[#ffba3a]/30 hover:shadow-[#ffba3a]/20 active:shadow-[#ffba3a]/5" />
        {/* <p className="text-xs text-center mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius placeat
          atque nulla in cumque!
        </p> */}
        <div className="mt-2 flex gap-2">
          {specialties.map((item) => (
            <button className="text-xs px-2 py-1 text-white border border-white font-normal rounded-full">
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
