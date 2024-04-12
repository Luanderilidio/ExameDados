import { Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useBoolean } from 'react-hooks-shareable'



const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        backgroundColor: "#44b700",
        color: "#44b700",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
      "0%": {
          transform: "scale(.8)",
          opacity: 1,
        },
        "100%": {
            transform: "scale(2.4)",
            opacity: 0,
        },
    },
}));

export default function CardCEO() {
    const [currentValue, setTrue, setFalse, toggleValue] = useBoolean(false)


    return (
    <div
    
      className="shadow-black/30 !relative shadow-xl rounded-2xl p-5 h-96 bg-cover flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url('https://cdn.dribbble.com/uploads/47178/original/mercedes-bazan.png?1689174566&format=webp&resize=273x340&vertical=center')`,
      }}
    >
      <div className=" w-full h-full rounded-2xl flex items-center bg-black/90 p-5 absolute overflow-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="w-full text-sm text-center text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
          error obcaecati, unde minus esse aliquid vero dignissimos corporis!
          Quasi facilis, quidem nemo rerum iste quaerat distinctio ipsa error
          corporis porro.
        </p>
      </div>
      <div />

      <div className="w-full">
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            src="https://avatars.githubusercontent.com/u/23366712?v=4"
            sx={{ width: 30, height: 30 }}
          />
        </StyledBadge>
        <div className="flex justify-between items-center  mt-1 ">
          <div className="">
            <h1 className="font-semibold text-white leading-none text-left">
              Luander Ilidio
            </h1>
            <h1 className="font-normal text-xs text-white leading-none text-left">
              Power Bi - Especialist
            </h1>
          </div>
          <div className="w-fit flex items-center justify-end gap-2 text-white">
            <div className="transition-all ease-in-out hover:scale-110 active:scale-95 ">
              <LinkedInIcon />
            </div>
            <div className="transition-all ease-in-out hover:scale-110 active:scale-95 ">
              <InstagramIcon />
            </div>
          </div>
        </div>
        <div className="w-1/5 h-1 bg-amber-500 rounded-full transition mt-2 ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-[#ffba3a]/30 hover:shadow-[#ffba3a]/20 active:shadow-[#ffba3a]/5" />
        {/* <p className="text-xs text-center mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius placeat
          atque nulla in cumque!
        </p> */}
        <div className="mt-2 flex gap-2">
          <button className="text-xs px-2 py-1 text-white border border-white font-normal rounded-full">
            Ilustration
          </button>
          <button className="text-xs px-2 py-1 text-white border border-white font-normal rounded-full">
            Ilustration
          </button>
        </div>
      </div>
    </div>
  );
}
