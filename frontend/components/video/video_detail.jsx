import React from 'react';
// import { Link } from 'react-router-dom';

class VideoDetail extends React.Component{
  constructor(props){
    super(props)
    this.state = {url: this.props.video.url,
                  selectedVideo: null }
    debugger
  }

  handleClick(e){
    e.preventDefault();
    debugger
  }

  render() {
    if (!this.state.url) {
    return <div>Loading...</div>
  }

  const videoSrc = `${url.video}`;

  debugger
  return (
    <div>
      <div className="ui embed">
        <a onClick={(e) => handleClick(e)}>
          <video title="video player" src={videoSrc} />
        </a>
      </div>
      <div className="ui segment">
        <div>
          <h4 className="ui header"></h4>
          <p></p>
        </div>
      </div>
    </div>
  );
  }
};

export default VideoDetail;