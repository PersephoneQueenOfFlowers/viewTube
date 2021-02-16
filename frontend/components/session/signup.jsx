import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    $(".nav .right .signup, .nav .center").css("visibility", "hidden");
    $(".nav .right .login").css("visibility", "visible");
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then(this.props.history.push())
      .fail(
        $(".nav .right").css("visibility", "hidden")
      );
  }

  renderErrors(){
    if(this.props.errors.length > 0){
      return (
        <span className="errors">
          {this.props.errors[0]}
        </span>
      )
    }
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }

  render() {
    return (
      <section className="form-outer-container">
        <div className="form-inner-container">
          <div className="session-form">
        <h2>Sign Up!</h2>
            <span className="errors">{this.renderErrors()}</span>
        <form className="signup">
          <div>
              <label>Username:</label>
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleInput('username')}
              />
            
          </div>
          <div>
                <label>Email:</label>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.handleInput('email')}
                />
            
          </div>
          <div>
              <label>Password: </label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
              />
           
          </div>
          <div>
            <button onClick={this.handleSubmit}>Sign Up!</button>
          </div>
        </form>
      </div>
        </div>
      </section>
    );
  }
}

export default Signup;
