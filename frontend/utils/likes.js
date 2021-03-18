// fetchLikes, postLike, deleteLike

export const fetchLikes = (videoId) => { 
  debugger 
  return $.ajax({
    url: `/api/likes${videoId}`,
    method: 'GET'
  })
}

export const postLike = (like) => {
  return $.ajax({
    url: '/api/likes',
    method: 'POST',
    data: { like }
  })
}

export const deleteLike = (likeId) => {
  return $.ajax({
    url: `/api/comments/${likeId}`,
    method: 'DELETE'
  })
}
