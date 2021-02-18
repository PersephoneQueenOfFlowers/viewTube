import React from 'react';
import { connect } from 'react-redux';
import { callCurrentVideo } from '../../actions/video_actions';
import Show from './show';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    currentVideo: state.entities.videos
  };
};

const mapDispatchToProps = dispatch => ({
  callCurrentVideo: (videoId) => dispatch(callCurrentVideo(videoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Show);
