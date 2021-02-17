export const postUser = (user) => (
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user }
  })
)

export const postSession = (user) => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  })
}

export const deleteSession = () => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
)

export const fetchVids = () => {
  $.ajax({
    url: '/api/galleries/',
    method: 'GET'
  }).then(videos => {
    debugger
  })
}