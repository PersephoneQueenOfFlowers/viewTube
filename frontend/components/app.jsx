import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import HomeContainer from './home/home_container';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect 
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

export default () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <Switch>
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} /> 
      <Route exact path="/" component={HomeContainer} />
      <Redirect to="/" /> 
    </Switch>
  </div>
);
