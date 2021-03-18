import { RECEIVE_LIKES, REMOVE_LIKE, RECEIVE_LIKE } from '../actions/like_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_LIKES:
      return Object.assign({}, action.likes);
    case RECEIVE_LIKE:
      newState.likes[action.like.likeId] = action.like;
      return newState;
    case REMOVE_LIKE:
      delete newState.likes[action.likeId]
      return newState;
    default:
      return state;
  }
};

