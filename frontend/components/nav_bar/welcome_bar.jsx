import React from 'react';
import Navbar from './nav_bar';

export default ({ user }) => (
  <header className="nav-bar">
    <h4>Welcome { user.username }!</h4>
  </header>
);
