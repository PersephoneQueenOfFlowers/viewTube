import { RECEIVE_CURRENT_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT, UPDATE_COMMENT } from '../actions/comment_actions';

const _nullSession = {
  currentUser: null
};

export default (state = {}, action) => {
  Object.freeze(state); 
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return Object.assign({}, action.comments );
    case RECEIVE_CURRENT_COMMENT:
      newState.comments[action.comments.id] = action.comments;
      return newState;
    case REMOVE_COMMENT:
      delete newState.comments[action.commentId]
      return newState;
    case UPDATE_COMMENT:
      return Object.assign({}, action.comment, state);
    default:
      return state;
  }
};

