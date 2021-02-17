import React from 'react';
import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session';
import Show from './show';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  removeErrors: () => dispatch(removeErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Show);
