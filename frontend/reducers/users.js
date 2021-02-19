import { RECEIVE_CURRENT_USER } from '../actions/session';

// import { RECEIVE_REVIEW, RECEIVE_BENCH } from '../actions/bench_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
};

// export default usersReducer;