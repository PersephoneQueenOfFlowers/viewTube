import React from 'react';
import VideoList from '../video/video_list';
// import { fetchVids } from '../../actions/video_actions';
import Sidebar from '../sidebar/sidebar';
import Hero from '../hero';
class Home extends React.Component{
  constructor(props){
    super(props)
    $(".nav .right *, .nav .center").css("visibility", "visible");
    this.state = {videos: []}

  }

  componentDidMount(){
    debugger
    this.props.callVideos()
  }

  render(){
    debugger
    if (Object.keys(this.props.videos).length === 0){
      return null
    }
    return (
    <div className="home"> 
      <Sidebar currentUser={this.props.currentUser}/>
      <div className="four column">
        <Hero />
   
          <VideoList videos={this.props.videos} />
   
      </div>
    </div>
    )
  }
}

export default Home;