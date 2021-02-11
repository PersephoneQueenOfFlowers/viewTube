import React from 'react';
import { Link } from 'react-router-dom';
import Signup from '../session/signup';
import SearchBar from './searchbar';
// import PersonIcon from '../../../app/assets/images/person_icon.svg';

export default ({ currentUser, logout }) => {

const display = currentUser ? (
    <div>
      <h3>Welcome {currentUser.username}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div className={'nav'}> 
      <div className={'left'}><h2>viewTube</h2></div>
      <div className={'center'}> <SearchBar /> </div> 
      <div className={'right'}> 
      <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    </div>
  );
  return (
    <header className="nav-bar">

        {display}
   
    </header>
  )
}
