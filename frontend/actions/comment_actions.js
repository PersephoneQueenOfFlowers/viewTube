import { postComment, fetchComments, deleteComment } from '../utils/comments';

export const RECEIVE_CURRENT_COMMENT = 'RECEIVE_CURRENT_COMMENT';
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveCurrentComment = comment => {
  return {
    type: RECEIVE_CURRENT_COMMENT,
    comment
  }
}

const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}

const removeComment = commentId => {
  return {
    type: REMOVE_COMMENT,
    commentId 
  }
}

export const createNewComment = comment => dispatch => postComment(comment)
  .then(comment => {
    return dispatch(receiveCurrentComment(comment))
  })
// .fail(error => (dispatch(receiveErrors(error.responseJSON))));


export const callComments = () => dispatch => fetchComments()
  .then(comments => {
    return dispatch(receiveComments(comments))
  })
  // .fail(error => (dispatch(receiveErrors(error.responseJSON))));

export const removeCurrentComment = (commentId) => dispatch => deleteComment(commentId)
  .then(() => {
    return dispatch(removeComment(commentId))
  }
  );