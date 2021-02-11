import React from 'react';
import { Link } from 'react-router-dom';

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
              <li>
                Live
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar;