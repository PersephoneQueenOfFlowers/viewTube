import React from 'react';
import { Link } from 'react-router-dom';
import Signup from '../session/signup';
import SearchBar from './searchbar';
import Login from '../session/login';

export default ({ currentUser, logout, login }) => {

  const formUser = { 
    "username": "dave",
    "password": "123456" 
  }

  const handleClick = (e) => {
    e.preventDefault();
    login(formUser);
  }

  const handleLogout = (e) => {
    e.preventDefault();
    $('.signup, .login').css('visibility','visible');
    logout();
  }

  const display = currentUser ? (
    <div className={'nav'}>
      <div className={'left'}>
      <Link to="/"><span className={"logo"}> </span></Link>
        <h3>Welcome {currentUser.username}!</h3>
      </div>

      <div className={'center'}> <SearchBar /> </div> 
      <div className={'right'}>
          <button onClick={(e) => handleLogout(e)}>Logout</button>
      </div>
    </div>
  ) : (
    <div className={'nav'}> 
      <div className={'left'}>
        <Link to="/"><span className={"logo"}></span></Link>
      </div>
      <div className={'center'}> <SearchBar /> </div> 
      <div className={'right'}> 
        <button className={'login demo'} onClick={ e => handleClick(e)}>demo login</button>
        <Link className={'signup'} to="/signup">Sign Up</Link>
        <Link className={'login'} to="/login">Login</Link>
      </div>
    </div>
  );
  return (
    <header className="nav-bar">
        {display}
    </header>
  )
}
