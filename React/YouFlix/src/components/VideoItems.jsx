import React from "react";
import "./VideoItems.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img alt={video.title} src={video.snippet.thumbnails.medium.url} />
      {video.snippet.title}
    </div>
  );
};

export default VideoItem;
