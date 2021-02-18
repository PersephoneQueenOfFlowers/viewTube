import React from 'react';
import { connect } from 'react-redux';
import { callCurrentVideo, callVideos } from '../../actions/video_actions';
import Home from './home';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    videos: state.entities.videos
  };
};

const mapDispatchToProps = dispatch => ({
  callVideos: () => dispatch(callVideos()),
  callCurrentVideo: (videoId) => dispatch(callCurrentVideo(videoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
