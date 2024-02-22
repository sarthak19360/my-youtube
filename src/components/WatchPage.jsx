import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hideMenu } from "../utils/appSlice";

const WatchPage = () => {
  const [videoId, setVideoId] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideMenu());
  }, []);
  return (
    <div>
      <iframe
        width="1000"
        height="560"
        src={"https://www.youtube.com/embed/" + videoId.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default WatchPage;
