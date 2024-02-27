import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ChatComment = ({ name, message }) => {
  return (
    <div className="flex items-center my-3 shadow-sm">
      <FaUserCircle className="h-6 w-6 mr-2" />
      <span className="font-bold mr-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatComment;
