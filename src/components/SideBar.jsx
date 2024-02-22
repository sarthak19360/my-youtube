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

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-4 w-3.5/12 shadow-lg">
      <div>
        {/* Normal Icons */}
        <div className="flex px-2 py-1">
          <Link to="/" className="flex">
            <MdHomeFilled className="text-2xl mr-4" />
            <div className="text-base font-semibold">Home</div>
          </Link>
        </div>
        <div className="flex px-2 py-1">
          <SiYoutubeshorts className="text-2xl mr-4" />
          <div className="text-base font-semibold">Shorts</div>
        </div>
        <div className="flex px-2 py-1">
          <MdSubscriptions className="text-2xl mr-4" />
          <div className="text-base font-semibold">Subscriptions</div>
        </div>
      </div>
      <div className="my-3 border-t-2 border-solid border-gray-300 w-40">
        {/* You Icons */}
        <div className="text-lg font-normal px-3 py-2 flex">
          You <MdKeyboardArrowRight className="text-2xl mx-2 my-auto" />
        </div>
        <div className="flex px-2 py-1">
          <PiUserSquareFill className="text-2xl mr-4" />
          <div className="text-base font-semibold">Your Channel</div>
        </div>
        <div className="flex px-2 py-1">
          <FaHistory className="text-2xl mr-4" />
          <div className="text-base font-semibold">History</div>
        </div>
        <div className="flex px-2 py-1">
          <MdOndemandVideo className="text-2xl mr-4" />
          <div className="text-base font-semibold">Your Videos</div>
        </div>
        <div className="flex px-2 py-1">
          <MdOutlineWatchLater className="text-2xl mr-4" />
          <div className="text-base font-semibold">Watch Later</div>
        </div>
        <div className="flex px-2 py-1">
          <BiSolidLike className="text-2xl mr-4" />
          <div className="text-base font-semibold">Liked Videos</div>
        </div>
      </div>
      <div className="my-3 border-t-2 border-solid border-gray-300 w-40">
        {/* Explore Icons */}
        <div className="text-lg font-normal px-3 py-2 flex">
          Explore <MdKeyboardArrowRight className="text-2xl mx-2 my-auto" />
        </div>
        <div className="flex px-2 py-1">
          <FaFire className="text-2xl mr-4" />
          <div className="text-base font-semibold">Trending</div>
        </div>
        <div className="flex px-2 py-1">
          <MdOutlineShoppingBag className="text-2xl mr-4" />
          <div className="text-base font-semibold">Shopping</div>
        </div>
        <div className="flex px-2 py-1">
          <MdMusicNote className="text-2xl mr-4" />
          <div className="text-base font-semibold">Music</div>
        </div>
        <div className="flex px-2 py-1">
          <PiFilmSlateBold className="text-2xl mr-4" />
          <div className="text-base font-semibold">Films</div>
        </div>
        <div className="flex px-2 py-1">
          <CiStreamOn className="text-2xl mr-4" />
          <div className="text-base font-semibold">Live</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
