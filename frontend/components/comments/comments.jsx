import React from 'react';
import CommentsFormContainer from './comments_form_container';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      commentBody: ""
    };
  }

  componentDidMount() {
    this.props.callComments()
  }

  render() {
    if (!this.props.comments.comments) {
      return null
    }
    const videoId = JSON.parse(this.props.videoId);
    const displayCommentForm = this.props.currentUser ? (
      <CommentsFormContainer userId={currentUser.id} videoId={videoId} createNewComment={this.props.createNewComment}/>
     
    ) : (<span>login to comment</span>)

    const relatedComments = Object.values(this.props.comments.comments).filter(comment => comment.video_id === videoId)
    const renderedComments = relatedComments.map(comment => {
      return (
        <div className="comments-inner-container">
  
          <div className="comment-box">
            <h2>author: {comment.author.username}</h2>
            <p>{comment.body}</p>
          </div>
        </div>
      )
    });
    
    return (
      <section className="comments-outer-container">
        <div>{renderedComments}</div>
        <div>{displayCommentForm}</div>
      </section>
    );
  }
}

export default Comments;
