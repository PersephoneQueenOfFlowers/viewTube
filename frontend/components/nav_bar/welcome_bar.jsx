import React from 'react';

export default ({ user }) => (
  <header className="nav-bar">
    <h1>viewTube</h1>
    <h4>Welcome { user.username }!</h4>
  </header>
);
