import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube, FaUserCircle } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispath = useDispatch();
  const handleToggleMenu = () => {
    dispath(toggleMenu());
  };
  return (
    <div className="flex justify-between h-20 py-2 px-4 shadow-lg">
      <div className="flex my-auto">
        <RxHamburgerMenu
          className="text-3xl mr-2 rounded-full p-1.5 hover:bg-gray-300 cursor-pointer"
          onClick={() => handleToggleMenu()}
        />
        <FaYoutube className="text-3xl text-red-600" />
      </div>
      <div className="flex my-auto h-10">
        <input
          type="text"
          placeholder="Search"
          className="w-[560px] px-4 py-1 bg-gray-200 rounded-l-full border-none outline-none"
        />
        <FaMagnifyingGlass className="h-10 w-16 p-3 bg-gray-300 rounded-r-full" />
      </div>
      <div className="my-auto">
        <FaUserCircle className="text-2xl" />
      </div>
    </div>
  );
};

export default Header;
