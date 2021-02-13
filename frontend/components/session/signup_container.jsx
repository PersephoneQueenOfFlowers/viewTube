import { connect } from 'react-redux';
import { createNewUser, login, removeErrors  } from '../../actions/session';
import Signup from './signup';

const mapStateToProps = ({errors}) => {
  return {
    errors: errors
  };
};

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  login: formUser => dispatch(login(formUser)),
  removeErrors: () => dispatch(removeErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

// there is no part of state that this component will need to rely on for signing someone up. 
