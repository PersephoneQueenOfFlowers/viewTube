import React from 'react';
import VideoList from '../video/video_list';
import { fetchVids } from '../../utils/youtube';
import Sidebar from '../sidebar/sidebar';
import Hero from '../hero';
// import { useAsync } from "react-async";
class Show extends React.Component {
  constructor(props) {
    super(props)
    $(".nav .right *, .nav .center").css("visibility", "visible");
    this.state = { videos: [], selectedVideo: null };
  }

  fetchVids() {
    $.ajax({
      url: '/api/videos/',
      method: 'GET'
    }).then(videos => {
      this.setState({ videos });
    })
  }

  componentDidMount() {
    this.fetchVids();
  }

  render() {
    if (this.state.videos.length === 0) {
      return null
    }
    return (
      <div className="show">
        <Sidebar currentUser={this.props.currentUser} />
        <div className="four column">
          <Hero />
          <VideoList videos={this.state.videos} />
        </div>
      </div>
    )
  }
}

export default Show;

// onVideoSelect = { this.onVideoSelect } 