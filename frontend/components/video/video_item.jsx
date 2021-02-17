import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item item">
      <img className="ui image" alt={video.snippet.id} src={video.snippet.url} />
      <div className="content">
        <div className="header">{video.snippet.url}</div>
      </div>
    </div>
  );
};

export default VideoItem;