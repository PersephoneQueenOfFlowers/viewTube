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
            <video controls title="video player" src={videoSrc} />
          </div>
          <div className="ui segment">
            <div>
              <h1 className="video-header">{this.props.video.title}</h1>
              <p className="video-description">{this.props.video.description}</p>
            </div>
            <div className="shares-likes">
          
            </div>
          </div>
        </Link>
      </div>
    );
  }
};

export default VideoDetail;