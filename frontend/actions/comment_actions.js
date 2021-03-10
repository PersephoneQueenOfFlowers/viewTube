import { postComment, fetchComments, deleteComment, modifyComment } from '../utils/comments';

export const RECEIVE_CURRENT_COMMENT = 'RECEIVE_CURRENT_COMMENT';
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";

const receiveCurrentComment = comments => {
  return {
    type: RECEIVE_CURRENT_COMMENT,
    comments
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

const updateComment = comment => {
  return {
    type: UPDATE_COMMENT,
    comment
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

export const updateCurrentComment = (comment) => dispatch => modifyComment(comment)
  .then(() => {
    return dispatch(updateComment(comment))
  }
  );