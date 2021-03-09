import React from 'react';
import CommentsFormContainer from './comments_form_container';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      commentBody: "",
      showHideCommentUpdate: false,
      commentUpdateButton: "update" 
    };
    this.showCommentForm = this.showCommentForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showCommentForm(body){
    this.state.showHideCommentUpdate ? 
      this.setState({ showHideCommentUpdate: false, commentUpdateButton: "update" }) :
      this.setState({ showHideCommentUpdate: true, commentUpdateButton: "hide", commentBody: body}); 
  }

  handleSubmit(comment, commentBody){ 
    comment.body = commentBody;
    this.props.updateCurrentComment(comment);
    this.setState({ showHideCommentUpdate: false, commentUpdateButton: "update" });
  }

  handleInput() {
    return (e) => {
      this.setState({ commentBody: e.target.value });
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
      <CommentsFormContainer userId={this.props.currentUser.id} videoId={videoId} createNewComment={this.props.createNewComment}/>
     
    ) : (<span>login to comment</span>)

    const relatedComments = Object.values(this.props.comments.comments).filter(comment => comment.video_id === videoId)
    const renderedComments = relatedComments.map(comment => {  
      return (
        <div className="comments-inner-container">
          <div className="comment-box">
            <h2>author: {comment.author.username}</h2>
            <p>{comment.body}</p>
            {
              this.props.currentUser.id === comment.author.id ? 
              <div className="update-delete">
                <button onClick={() => this.props.removeCurrentComment(comment.id)}>remove</button> 
                  <button onClick={() => this.showCommentForm(comment.body)}>{this.state.commentUpdateButton}</button>
                  <form className={this.state.showHideCommentUpdate ? "visible":"hidden" }>
                    <input type="textarea" 
                           value={this.state.commentBody} 
                           onChange={this.handleInput()}
                           />
                    <button type="submit" onClick={() => this.handleSubmit(comment, this.state.commentBody)}>update comment</button>
                  </form> 
              </div>
            : <span></span>
            }
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
