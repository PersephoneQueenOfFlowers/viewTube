import React from 'react';

class CommentForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      body: "",
      author_id: this.props.userId,
      video_id: this.props.videoId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput() {
    return (e) => {
      this.setState({ body: e.target.value });
    };
  }

  handleSubmit(e){
    this.props.createNewComment(this.state);
    this.setState({ body: " "});
  }

  render(){
    return (
      <form className="createComment">
        <div>
          <label></label>
          <textarea
            name="body"
            value={this.state.body}
            onChange={this.handleInput()}
          />
        </div>

        <div>
          <button type="submit" onClick={this.handleSubmit}>Comment</button>
        </div>
      </form>
    )
  }
}

export default CommentForm;