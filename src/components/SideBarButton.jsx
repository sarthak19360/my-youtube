import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { Link } from "react-router-dom";

const SideBarButton = ({ url, SideIcon, text }) => {
  return (
    <div className="flex px-2 py-1">
      <Link to={url} className="flex">
        <SideIcon className="text-2xl mr-4" />
        <div className="text-base font-semibold">{text}</div>
      </Link>
    </div>
  );
};

export default SideBarButton;
