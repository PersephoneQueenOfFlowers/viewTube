import React from 'react';
import { Link } from 'react-router-dom';

class VideoDetail extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      loading: true 
    }
  }

  componentDidMount() {
    const currentVideo = document.querySelector("video");
    if(currentVideo){
      currentVideo.addEventListener("loadeddata", () => {
        this.setState({ loading: false });
      });
    }
  }

  render() {
    const loadedVideo = document.querySelector('.showVideo');



    if (!this.props.video) {
      return <div className="loader">Loading...</div>
    }
 
    const videoSrc = `${this.props.video.videoUrl}`;
    let selected;
    if (this.props.video.id === this.props.selectedVideo){
      selected = "selected"
    }else {
      selected = "unSelected"
    }

    const autoPlay = this.props.autoplay ? true : false 
  
    return (
      <div id={this.props.video.id} className={selected}>
        <Link to={`/show/${this.props.video.id}`}>
          <div className="ui embed">
            <video
              className="showVideo"   
              controls 
              title="video player"
              style={{
                opacity: this.state.loading ? .25 : 1,
                transition: "opacity, 2s ease-in-out"
              }}>
              <source src={videoSrc} type="video/mp4" />
            </video>
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