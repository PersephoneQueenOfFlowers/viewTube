import React from 'react';
// import { Link } from 'react-router-dom';

class VideoDetail extends React.Component{
  constructor(props){
    super(props)
    this.state = {url: this.props.video}
  }

  handleClick(e){
    e.preventDefault();
  }

  render() {
    if (!this.state.url) {
      return <div>Loading...</div>
    }

    const videoSrc = `${this.state.url}`;
    return (
      <div>
        <div className="ui embed">
          <video title="video player" src={videoSrc} />
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