import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, 
//         faMusic, 
//         faTrophy, 
//         faDiceD6,
//         faFilm,
//         faNewspaper } from '@fortAwesome/free-solid-svg-icons';

class Sidebar extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className={"sidebar"}>
        <ul className={"sideNav"}>
          <li className={"sideNavItem home"}>
            <Link to="/">Home</Link>
          </li>
          <li className={"sideNavItem signIn"}>
            <h2>Log in to like videos <br /> and comment</h2>
            <Link to="/login">Log In</Link>
          </li>
          <li className={"sideNavItem bestOf"}>
            <ul>
              <li>
                Music
              </li>
              <li>
                Sports
              </li>
              <li>
                Gaming
              </li>
              <li>
                Movies &amp; Shows
              </li>
              <li>
                News
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar;