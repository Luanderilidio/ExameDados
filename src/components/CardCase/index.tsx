import Ilustration8 from "../../assets/Ilustration8.png";


interface PropsCase {
    image: string
    title: string
    subtitle: string

}


export const CardCase = ({image, title, subtitle}: PropsCase) => {
  return (
    <div className="flex flex-col">
      <div className="w-80 h-60 transition-all ease-in-out duration-500 shadow-lg shadow-black/30 hover:shadow-amber-500/40 border-amber-500/50 border-dashed border-0 overflow-hidden relative rounded-3xl ">
        <img
          className="w-full h-full hover:scale-105 transition duration-1000"
          src={image}
          alt=""
        />
      </div>
      <h1 className="text-left font-Sora text-sm font-light mt-5">
        {title}
      </h1>
      <h1 className="text-left font-Sora text-3xl font-bold mt-3">
       {subtitle}
      </h1>
    </div>
  );
};
