import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hideMenu } from "../utils/appSlice";
import ReactPlayer from "react-player";
import { FaUserCircle } from "react-icons/fa";
import {
  YOUTUBE_COMMENTS_API,
  VIDEO_API,
  CHANNEL_API,
} from "../utils/constant";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [videoId, setVideoId] = useSearchParams();
  const [comments, setComments] = useState([]);
  const [videoInfo, setVideoInfo] = useState({});
  const dispatch = useDispatch();
  const fetchComments = async () => {
    const resp = await fetch(YOUTUBE_COMMENTS_API + videoId.get("v"));
    const data = await resp.json();
    setComments(data?.items);
  };

  const fetchVideoInfo = async () => {
    const resp = await fetch(VIDEO_API + videoId.get("v"));
    const data = await resp.json();
    setVideoInfo(data?.items[0]);
  };
  useEffect(() => {
    dispatch(hideMenu());
    fetchComments();
    fetchVideoInfo();
  }, []);
  const { snippet, statistics } = videoInfo || {};
  return (
    <div className="flex flex-col w-full">
      <div className="flex">
        <ReactPlayer
          className="my-3 rounded-lg bg-red-900 w-8/12"
          url={"https://www.youtube.com/embed/" + videoId.get("v")}
          playing={true}
          controls={true}
          height={500}
          width={1000}
        />
        <LiveChat />
      </div>
      <div className="text-xl font-bold py-3">{snippet?.title}</div>

      <div>
        <h1 className="text-xl font-semibold my-3">Comments</h1>
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="flex p-3 mx-2 bg-white shadow-lg w-[700px] my-4"
          >
            <FaUserCircle className="h-6 w-1/12" />
            <h4 className="w-11/12">
              {comment.snippet.topLevelComment.snippet.textOriginal}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
