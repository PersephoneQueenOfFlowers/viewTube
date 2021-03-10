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

  showCommentForm(e){
    let textPara = e.target.parentNode.previousSibling.innerText;
    let nextSibling = e.target.nextElementSibling;
    nextSibling.classList.toggle("hidden");
    let buttonText = e.target.innerHTML; 
    e.target.innerHTML === "update" ? e.target.innerHTML = "change mind" : e.target.innerHTML = "update";  
    e.target.nextElementSibling.firstElementChild.value = textPara;
  }

  handleSubmit(e, comment, commentBody){ 
    comment.body = commentBody;
    this.setState({ showHideCommentUpdate: false, commentUpdateButton: "update" });
    $('.changeText').addClass("hidden");
    $('.updateBtn').text("update");
    this.props.updateCurrentComment(comment);
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
              this.props.currentUser && this.props.currentUser.id === comment.author.id ? 
              <div className="update-delete">
                <button onClick={() => this.props.removeCurrentComment(comment.id)}>remove</button> 
                  <button className="updateBtn" onClick={(e) => this.showCommentForm(e)}>{this.state.commentUpdateButton}</button>
                  <form className="hidden changeText">
                    <input type="textarea" 
                           value={this.state.commentBody} 
                           onChange={this.handleInput()}
                           />
                    <button type="submit" onClick={(e) => this.handleSubmit(e,comment, this.state.commentBody)}>update comment</button>
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
