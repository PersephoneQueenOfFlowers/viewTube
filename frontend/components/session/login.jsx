import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    $(".nav .right, .sideNav .signIn").css("visibility", "hidden");
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(this.props.history.push())
      .fail(
        // $(".nav .right").css("visibility", "hidden")  
      )
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return (
        <span className="errors">
          {this.props.errors[0]}
        </span>
      )
    }
  }

  render() {
    return (
      <section className="form-outer-container">
        <div className="form-inner-container">
          <div className="session-form login">
            <h2>log in</h2>
            <span className="errors">{this.renderErrors()}</span>
            
            <form className="login">
              <div>
                <label>Username:</label>
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.handleInput('username')}
                />
              </div>
              
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInput('password')}
                />
                <div>
                  <button onClick={this.handleSubmit}>Log In!</button>
                </div>
              </div>
            
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
