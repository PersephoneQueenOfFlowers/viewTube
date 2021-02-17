import React from 'react';
import VideoItem from './video_item';
import VideoDetail from './video_detail';

const VideoList = ( videos) => { 
  if (videos === {}) {
    return null
  }
  const renderedList = videos.videos.map(video => {
    return (
      <div className={"videoItemContainer"}>
        <VideoDetail video={video.videoUrl} />
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