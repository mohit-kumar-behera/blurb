import { ADD_MESSAGE, REMOVE_MESSAGE } from './actionTypes';

export const addMessage = message => {
  return {
    type: ADD_MESSAGE,
    payload: {
      message,
    },
  };
};

export const removeMessage = () => {
  return {
    type: REMOVE_MESSAGE,
  };
};
