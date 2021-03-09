
export const fetchComments = () => {
  return $.ajax({
    url: '/api/comments/',
    method: 'GET'
  })
}

export const postComment = (comment) => {
  return $.ajax({
    url: '/api/comments',
    method: 'POST',
    data: { comment }
  })
}

export const deleteComment = (commentId) => { 
  return $.ajax({
    url: `/api/comments/${commentId}`,
    method: 'DELETE'
  })
}

export const modifyComment = (comment) => {
  return $.ajax({
    url: `/api/comments/${comment.id}`,
    method: 'PATCH',
    data: { comment }
  })
}

