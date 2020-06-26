import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const renderedList = props.videos.map((video) => {
    return (
      <VideoItem
        thumbnailURL={video.snippet.thumbnails.medium.url}
        title={video.snippet.title}
      />
    );
  });

  return (
    <div className="video-list ui relaxed divided list">{renderedList}</div>
  );
};

export default VideoList;
