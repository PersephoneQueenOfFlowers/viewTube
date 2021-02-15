import React from 'react';
import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session';
import Login from './login';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors
  };
};

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  removeErrors: () => dispatch(removeErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
