import {
  MdHomeFilled,
  MdSubscriptions,
  MdKeyboardArrowRight,
  MdOndemandVideo,
  MdOutlineWatchLater,
  MdOutlineShoppingBag,
  MdMusicNote,
} from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { FaFire } from "react-icons/fa6";
import { PiUserSquareFill, PiFilmSlateBold } from "react-icons/pi";
import { SiYoutubeshorts } from "react-icons/si";
import { BiSolidLike } from "react-icons/bi";
import { CiStreamOn } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SideBarButton from "./SideBarButton";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-4 w-3.5/12 shadow-lg">
      <div>
        {/* Normal Icons */}
        <SideBarButton url="/" SideIcon={MdHomeFilled} text="Home" />
        <SideBarButton url="/" SideIcon={SiYoutubeshorts} text="Shorts" />
        <SideBarButton
          url="/"
          SideIcon={MdSubscriptions}
          text="Subscriptions"
        />
      </div>
      <div className="my-3 border-t-2 border-solid border-gray-300 w-40">
        {/* You Icons */}
        <div className="text-lg font-normal px-3 py-2 flex">
          You <MdKeyboardArrowRight className="text-2xl mx-2 my-auto" />
        </div>
        <SideBarButton
          url="/"
          SideIcon={PiUserSquareFill}
          text="Your Channel"
        />
        <SideBarButton url="/" SideIcon={FaHistory} text="History" />
        <SideBarButton url="/" SideIcon={MdOndemandVideo} text="Your Videos" />
        <SideBarButton
          url="/"
          SideIcon={MdOutlineWatchLater}
          text="Watch Later"
        />
        <SideBarButton url="/" SideIcon={BiSolidLike} text="Liked Videos" />
      </div>
      <div className="my-3 border-t-2 border-solid border-gray-300 w-40">
        {/* Explore Icons */}
        <div className="text-lg font-normal px-3 py-2 flex">
          Explore <MdKeyboardArrowRight className="text-2xl mx-2 my-auto" />
        </div>
        <SideBarButton url="/" SideIcon={FaFire} text="Trending" />
        <SideBarButton
          url="/"
          SideIcon={MdOutlineShoppingBag}
          text="Shopping"
        />
        <SideBarButton url="/" SideIcon={MdMusicNote} text="Music" />
        <SideBarButton url="/" SideIcon={PiFilmSlateBold} text="Films" />
        <SideBarButton url="/" SideIcon={CiStreamOn} text="Live" />
      </div>
    </div>
  );
};

export default SideBar;
