import { ADD_MESSAGE, REMOVE_MESSAGE } from '../actions/actionTypes';

const INITIAL_STATE = {
  hasMessage: false,
  messages: [],
};

const messageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        hasMessage: true,
        messages: [...state.messages, action.payload.message],
      };
    case REMOVE_MESSAGE:
      return { ...state, hasMessage: false, messages: [] };
    default:
      return state;
  }
};

export default messageReducer;
