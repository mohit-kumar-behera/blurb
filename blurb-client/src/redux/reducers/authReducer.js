import { LOGIN, LOGOUT } from '../actions/actionTypes';

const INITIAL_STATE = {
  // user: null,
  user: 'mohit',
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload.user };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default authReducer;
