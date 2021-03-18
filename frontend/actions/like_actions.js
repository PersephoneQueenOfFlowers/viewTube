import { fetchLikes, postLike, deleteLike } from '../utils/likes';

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLikes = likes => {
  return {
    type: RECEIVE_LIKES,
    likes
  }
}

const receiveLike = like => {
  return {
    type: RECEIVE_LIKE,
    like
  }
}

const removeLike = likeId => {
  return {
    type: REMOVE_LIKE,
    likeId
  }
}

export const fetchAllLikes = (videoId) => dispatch => fetchLikes(videoId)
  .then(likes => {
    return dispatch(receiveLikes(likes))
  })
// .fail(error => (dispatch(receiveErrors(error.responseJSON))));

export const createLike = like => dispatch => postLike(like)
  .then(like => {
    return dispatch(receiveLike(like))
  })
// .fail(error => (dispatch(receiveErrors(error.responseJSON))));

export const removeCurrentLike = (likeId) => dispatch => deleteLike(likeId)
  .then(() => {
    return dispatch(removeLike(likeId))
  }
  );