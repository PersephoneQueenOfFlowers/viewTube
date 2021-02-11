import React from 'react';
import { Link } from 'react-router-dom';
import Signup from '../session/signup';
import SearchBar from './searchbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortAwesome/free-solid-svg-icons';

// import PersonIcon from '../../../app/assets/images/person_icon.svg';
{/* <h2>vi<FontAwesomeIcon icon={faEye} /><FontAwesomeIcon icon={faEye} />Tube</h2> */}
export default ({ currentUser, logout }) => {

const display = currentUser ? (
    <div className={'nav'}>
      <div className={'left'}>
        <span className={"logo"}></span>
        <h3>Welcome {currentUser.username}!</h3>
      </div>
      <div className={'center'}> <SearchBar /> </div> 
      <div className={'right'}>
          <button onClick={logout}>Logout</button>
      </div>
    </div>
  ) : (
    <div className={'nav'}> 
      <div className={'left'}>
      <span className={"logo"}></span>
      </div>
      <div className={'center'}> <SearchBar /> </div> 
      <div className={'right'}> 
      <Link to="/signup">Sign Up</Link>
      <Link className={'login'} to="/login">Log In</Link>
      </div>
    </div>
  );
  return (
    <header className="nav-bar">

        {display}
   
    </header>
  )
}
