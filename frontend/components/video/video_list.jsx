import React from 'react';
import VideoItem from './video_item';
import VideoDetail from './video_detail';

const VideoList = ({ videos, onVideoSelect }) => {

  const renderedList = videos.map((video) => {
    return (
      <div className={"videoItemContainer"}>
        <VideoDetail key={video.id} video={video} />
        </div>
      )
  });

  return <div className="ui relaxed divided list">{renderedList}</div>

};

export default VideoList;

/**
<VideoItem
  key={video.id}
  onVideoSelect={onVideoSelect}
  video={video}
/>
**/