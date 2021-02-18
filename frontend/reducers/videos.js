import { RECEIVE_VIDEOS, RECEIVE_CURRENT_VIDEO } from '../actions/video_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return Object.assign({}, state, action.videos );
    case RECEIVE_CURRENT_VIDEO:
      return Object.assign({}, state, action.video); 
    default:
      return state;
  }
};

//either the empty array or an object with key of videos pointing to 
// empty array...