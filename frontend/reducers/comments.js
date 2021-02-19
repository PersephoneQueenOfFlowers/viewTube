import { RECEIVE_CURRENT_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT } from '../actions/comment_actions';

const _nullSession = {
  currentUser: null
};

export default (state = {}, action) => {
  Object.freeze(state); 
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return Object.assign({},  action.comments );
    case RECEIVE_CURRENT_COMMENT:
      return Object.assign({}, {comment: action.comment}, state );
    case REMOVE_COMMENT:
      const deleted = { [action.comment.id]: null };
    default:
      return state;
  }
};