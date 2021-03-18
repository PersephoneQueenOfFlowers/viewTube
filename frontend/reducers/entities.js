import { combineReducers } from 'redux';
import users from './users';
import videos from './videos';
import comments from './comments';
import likes from './likes';

// import videos from './videos_reducer';
// import comments from './comments_reducer'; TODO build these

export default combineReducers({
  users: users,
  videos: videos,
  comments: comments,
  likes: likes  
});