import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hideMenu } from "../utils/appSlice";
import ReactPlayer from "react-player";
import {
  YOUTUBE_COMMENTS_API,
  VIDEO_API,
  CHANNEL_API,
} from "../utils/constant";

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
    <div className="flex flex-col">
      <ReactPlayer
        className="my-3 rounded-lg bg-red-900"
        url={"https://www.youtube.com/embed/" + videoId.get("v")}
        playing={true}
        controls={true}
        height={500}
        width={1000}
      />
      <div className="text-xl font-bold py-3">{snippet?.title}</div>

      <div>
        <h1 className="text-xl font-semibold my-3">Comments</h1>
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="p-3 mx-2 bg-white shadow-lg w-[700px] my-4"
          >
            {comment.snippet.topLevelComment.snippet.textOriginal}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
