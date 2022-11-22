import Social from "./Social";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
const About = ({ avatar, name, profession, bio, address, social }) => {
  return (
    <div className=" relative w-[100%] h-[100%] flex flex-col gap-3 justify-center items-center my-auto  text-third">
      <h2 className="absolute top-[16px]  max-sm:static text-xl text-center">{profession}</h2>
      <div className="absolute top-[11px] right-[10px] hover:bg-white hover:text-primary rounded p-1">
        <a href="https://drive.google.com/drive/folders/1JOrjd0CjsSLqB5M_m-SrNWlmnByfYolP?usp=share_link" target="blank" download="newfilename"><ArrowCircleDownIcon /></a>
      </div>
      <div className="w-[30%]  ">
        <img
          src={avatar}
          style={{ width: "100%", borderRadius: "99px" }}
          alt={name}
        />
      </div>
      <div className="title">
        <h1 className="text-xl">{name}</h1>
      </div>
      <div className="text-xs w-[90%]">
        <p className="text-center font-semibold">{bio}</p>
      </div>
      <div className="flex gap-1 justify-center items-center rounded px-2 py-1 hover:border-2 hover:border-third">
        <LocationOnIcon />
        <a
          href="https://goo.gl/maps/mfMSG8LJxmWH1XDZA"
          rel="noreferrer"
          target="_blank"
        >
          {address}
        </a>
      </div>
      <Social social={social} />
    </div>
  );
};

export default About;
