import React from 'react';
import { Link } from 'react-router-dom';
import Signup from '../session/signup';

export default ({ currentUser, logout }) => {

const display = currentUser ? (
    <div>
      <h3>Welcome {currentUser.username}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
     <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
  return (
    <header className="nav-bar">
      <h1 className="logo">viewTube</h1>
      <div>
        {display}
      </div>
    </header>
  )
}
