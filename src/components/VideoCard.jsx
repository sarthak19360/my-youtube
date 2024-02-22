import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info || {};
  const { thumbnails, title, channelTitle } = snippet || {};
  const { likeCount, viewCount } = statistics || {};

  return (
    <div className="w-80 p-2 rounded-md shadow-md m-2">
      <img
        className="rounded-lg"
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <h1 className="font-semibold truncate">{title}</h1>
      <h2 className="font-bold mr-2 truncate">{channelTitle}</h2>
      <h2 className="ml-1font-light truncate">{viewCount} views</h2>
    </div>
  );
};

export default VideoCard;
