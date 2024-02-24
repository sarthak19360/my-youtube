import { FaMagnifyingGlass } from "react-icons/fa6";
const InputSuggestion = ({ text }) => {
  return (
    <li className="px-2 py-1 hover:bg-gray-100 flex items-center">
      <FaMagnifyingGlass className="mr-3" />
      {text}
    </li>
  );
};

export default InputSuggestion;
