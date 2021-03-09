import React from 'react';
import { connect } from 'react-redux';
import { callComments, createNewComment, removeCurrentComment, updateCurrentComment } from '../../actions/comment_actions';
import Comments from './comments';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    comments: state.entities.comments,
    currentVideoId: state.videoId
  };
};

const mapDispatchToProps = dispatch => ({
  callComments: () => dispatch(callComments()),
  createNewComment: (comment) => dispatch(createNewComment(comment)),
  removeCurrentComment: (comment) => dispatch(removeCurrentComment(comment)),
  updateCurrentComment: (comment) => dispatch(updateCurrentComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
