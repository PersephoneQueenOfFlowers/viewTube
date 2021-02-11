import React from 'react';
import VideoList from '../video/video_list';
import youtube from '../../utils/youtube';
import Sidebar from '../sidebar/sidebar';
// import { useAsync } from "react-async";
class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      videos: [
        {
          id: "PuTqWxuAazI",
          snippet: {
            title: "EVOLUTION of WORLD&#39; S TALLEST BUILDING: Size Comparison(1901- 2022)",
            url: "https://i.ytimg.com/vi/PuTqWxuAazI/mqdefault.jpg",
          },
        },
        {
          id: "pWxnVOB0Y98",
          snippet: {
            title: "Building The Most Creative Modern Water slide To Underground Swimming Pool",
            url: "https://i.ytimg.com/vi/pWxnVOB0Y98/mqdefault.jpg",
          },
        },
        {
          id: "djRbwtkRS4M",
          snippet: {
            title: "10 MOST IMPRESSIVE Buildings In The World",
            url: "https://i.ytimg.com/vi/djRbwtkRS4M/mqdefault.jpg",
          }
        },
        {
          id: "mmAbFyxZfAc",
          snippet: {
            title: "Demolition and Building FAILS #1 JUNE 2019",
            url: "https://i.ytimg.com/vi/mmAbFyxZfAc/mqdefault.jpg",
          }
        },
        {
          id: "e9bQ70RHKj8",
          snippet: {
            title: "Building A Modern Mud House Construction Tile Roof By Traditional Tools",
            url: "https://i.ytimg.com/vi/e9bQ70RHKj8/mqdefault.jpg",
          }
        },
        {
          id: "djRbwtkRS4M",
          snippet: {
            title: "10 MOST IMPRESSIVE Buildings In The World",
            url: "https://i.ytimg.com/vi/djRbwtkRS4M/mqdefault.jpg",
          }
        },
        {
          id: "mmAbFyxZfAc",
          snippet: {
            title: "Demolition and Building FAILS #1 JUNE 2019",
            url: "https://i.ytimg.com/vi/mmAbFyxZfAc/mqdefault.jpg",
          }
        },
        {
          id: "e9bQ70RHKj8",
          snippet: {
            title: "Building A Modern Mud House Construction Tile Roof By Traditional Tools",
            url: "https://i.ytimg.com/vi/e9bQ70RHKj8/mqdefault.jpg",
          }
        }
      ], selectedVideo: null};
    // this.onSubmit = this.onSubmit.bind(this);
  }

  render(){
    return (
    <div className="home"> 
      <Sidebar />
      <div className="four column">
        <VideoList videos={this.state.videos} />
      </div>
    </div>
    )
  }
}

export default Home;

// onVideoSelect = { this.onVideoSelect } 