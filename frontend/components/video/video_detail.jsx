import React from 'react';
import { Link } from 'react-router-dom';

class VideoDetail extends React.Component{
  constructor(props){
    super(props)

  }

  render() {
   
    if (!this.props.video) {
      return <div>Loading...</div>
    }
    const videoSrc = `${this.props.video.videoUrl}`;
    let selected;
    if (this.props.video.id === this.props.selectedVideo){
      selected = "selected"
    }else {
      selected = "unSelected"
    }
  
    return (
      <div id={this.props.video.id} className={selected}>
        <Link to={`/show/${this.props.video.id}`}>
          <div className="ui embed">
            <video title="video player" src={videoSrc} />
          </div>
          <div className="ui segment">
            <div>
              <h4 className="ui header">{this.props.video.title}</h4>
              <p>{this.props.video.description}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
};

export default VideoDetail;