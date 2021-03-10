import React from 'react';
import VideoItem from './video_item';
import VideoDetail from './video_detail';

const VideoList = ( videos) => { 
  if (!videos.videos) {
    return null
  }

  const renderedList = Object.values(videos.videos).map(video => {
    return (
      <div className={"videoItemContainer"}>
        <VideoDetail video={video} />
        </div>
      )
  });

  return <div className="ui relaxed divided list">{renderedList}</div>

};

export default VideoList;