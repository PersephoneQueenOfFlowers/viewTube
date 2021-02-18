
export const fetchVids = () => {
  return $.ajax({
    url: '/api/videos/',
    method: 'GET'
  })
}

export const fetchVid = (videoId) => {
  return $.ajax({
    url: `/api/videos/${videoId}`,
    method: 'GET'
  })
}