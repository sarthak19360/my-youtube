import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SEARCH_API } from "../utils/constant";
import VideoResult from "./VideoResult";

const SearchResultsPage = () => {
  const [searchQuery] = useSearchParams();
  useEffect(() => {
    fetchSearchResults();
  }, [searchQuery]);
  const [videoSuggestions, setVideoSuggestions] = useState([]);

  const fetchSearchResults = async () => {
    const data = await fetch(SEARCH_API + searchQuery.get("q"));
    const resp = await data.json();
    setVideoSuggestions(
      resp?.items?.filter((item) => item.id.kind === "youtube#video")
    );
  };

  return (
    <div className="flex flex-col mx-auto">
      {videoSuggestions?.map((video) => (
        <VideoResult key={video.id.videoId} video={video} />
      ))}
    </div>
  );
};

export default SearchResultsPage;
