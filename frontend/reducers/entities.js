import { combineReducers } from 'redux';
import users from './users';
import videos from './videos';

// import videos from './videos_reducer';
// import comments from './comments_reducer'; TODO build these

export default combineReducers({
  users: users,
  videos: videos 
});