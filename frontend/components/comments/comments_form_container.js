import React from 'react';
import { connect } from 'react-redux';
import { callComments, createNewComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors
  };
};

const mapDispatchToProps = dispatch => ({
  callComments: () => dispatch(callComments()),
  createNewComment: comment => dispatch(createNewComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
