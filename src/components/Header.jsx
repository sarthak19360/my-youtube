import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube, FaUserCircle } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTION_API } from "../utils/constant";
import InputSuggestion from "./InputSuggestion";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispath = useDispatch();
  const handleToggleMenu = () => {
    dispath(toggleMenu());
  };
  const fetchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispath(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        fetchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  return (
    <div className="flex justify-between h-20 py-2 px-4 shadow-lg">
      <div className="flex my-auto">
        <RxHamburgerMenu
          className="text-3xl mr-2 rounded-full p-1.5 hover:bg-gray-300 cursor-pointer"
          onClick={() => handleToggleMenu()}
        />
        <Link to="/">
          <FaYoutube className="text-3xl text-red-600" />
        </Link>
      </div>
      <div className="my-auto">
        <div className="flex my-auto h-10">
          <input
            type="text"
            placeholder="Search"
            className="w-[560px] px-4 py-1 bg-gray-200 rounded-l-full border-none outline-none"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <Link to={"/searchResults?q=" + searchQuery}>
            <FaMagnifyingGlass className="h-10 w-16 p-3 bg-gray-300 rounded-r-full" />
          </Link>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white w-[560px] px-4 py-2 rounded-xl shadow-xl">
            <ul>
              {suggestions.map((s) => (
                <InputSuggestion key={s} text={s} />
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="my-auto">
        <FaUserCircle className="text-2xl" />
      </div>
    </div>
  );
};

export default Header;
