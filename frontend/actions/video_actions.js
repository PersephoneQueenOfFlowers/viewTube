import { fetchVid, fetchVids } from '../utils/video';

export const RECEIVE_CURRENT_VIDEO = 'RECEIVE_CURRENT_VIDEO';
export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";

const receiveCurrentVideo = video => {
  return {
    type: RECEIVE_CURRENT_VIDEO,
    video
  }
}

const receiveVideos = videos => {
  return {
    type: RECEIVE_VIDEOS,
    videos
  }
}

export const callCurrentVideo = videoId => dispatch => fetchVid(JSON.parse(videoId))
  .then(video => {
    return dispatch(receiveCurrentVideo(video))
  })
  // .fail(error => (dispatch(receiveErrors(error.responseJSON))));


export const callVideos = () => dispatch => fetchVids()
  .then(videos => {
    return dispatch(receiveVideos(videos))
  })
  // .fail(error => (dispatch(receiveErrors(error.responseJSON))));
