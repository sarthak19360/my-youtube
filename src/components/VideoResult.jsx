import React, { useEffect, useState } from "react";
import { CHANNEL_API, VIDEO_API } from "../utils/constant";

const VideoResult = ({ video }) => {
  useEffect(() => {
    fetchVideoDetails();
    fetchChannelDetails();
  }, []);
  const fetchVideoDetails = async () => {
    const resp = await fetch(VIDEO_API + video.id.videoId);
    const data = await resp.json();
    setViewCount(data.items[0].statistics.viewCount);
  };
  const fetchChannelDetails = async () => {
    const resp = await fetch(CHANNEL_API + video.snippet.channelId);
    const data = await resp.json();
    setChannelDetails(data.items[0].snippet);
  };
  const [viewCount, setViewCount] = useState();
  const [channelDetails, setChannelDetails] = useState();
  const { url } = video.snippet.thumbnails.high;
  const videoTitle = video.snippet.title;
  const { title, thumbnails } = channelDetails || {};
  return (
    <div className="flex m-3 w-9/12">
      <img className="h-64 w-80 rounded-lg mr-2" src={url} />
      <div>
        <h1 className="text-xl font-semibold">{videoTitle}</h1>
        <h3 className="font-medium">{viewCount} views</h3>
        <div className="flex items-center my-2 mx-3">
          <img
            className="rounded-full h-8 mr-2"
            src={thumbnails?.default?.url}
          />
          <h4>{title}</h4>
        </div>
        <h5>{video.snippet.description}</h5>
      </div>
    </div>
  );
};

// <img
//   className="h-56 w-72"
//   src={videoSuggestions[0]?.snippet?.thumbnails?.high?.url}
//   alt="thumbnail"
// />

export default VideoResult;
