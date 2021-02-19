import React from 'react';
import VideoList from '../video/video_list';
import Sidebar from '../sidebar/sidebar';
import Hero from '../hero';
import VideoDetail from '../video/video_detail';
import CommentsContainer from '../comments/comments_container';
class Show extends React.Component {
  constructor(props) {
    super(props)
    $(".nav .right *, .nav .center").css("visibility", "visible");
    this.state = { 
      video: {}
    }
  }

  componentDidMount() {
    this.setState({ video : this.props.callCurrentVideo(this.props.match.params.id)})
  }

  render() {
    return (
      <div>
        <Sidebar currentUser={this.props.currentUser} />
        <div className="show">
          <div className={"videoItemContainer"}>
            <VideoDetail video={this.props.currentVideo[this.props.match.params.id]} />
          </div>
          <CommentsContainer videoId={this.props.match.params.id} />
        </div>
      </div>
    )
  }
}

export default Show;