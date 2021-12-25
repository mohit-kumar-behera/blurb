import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import messageReducer from './messageReducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  message: messageReducer,
});

export default rootReducer;
