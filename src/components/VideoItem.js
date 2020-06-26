import React from "react";

const VideoItem = (props) => {
  return (
    <div className="video-item">
      <img src={props.thumbnailURL} />
      {props.title}
    </div>
  );
};

export default VideoItem;
