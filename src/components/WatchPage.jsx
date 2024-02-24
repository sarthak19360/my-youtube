import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hideMenu } from "../utils/appSlice";
import ReactPlayer from "react-player";

const WatchPage = () => {
  const [videoId, setVideoId] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideMenu());
  }, []);
  return (
    <div>
      <ReactPlayer
        url={"https://www.youtube.com/embed/" + videoId.get("v")}
        playing={true}
        controls={true}
      />
    </div>
  );
};

export default WatchPage;
