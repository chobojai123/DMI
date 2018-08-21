import { fromJS } from 'immutable';

import {
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES,
  LOAD_MESSAGES_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MESSAGES:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'MESSAGESitories'], false);
    case LOAD_MESSAGES_SUCCESS:
      return state
        .setIn(['userData', 'MESSAGESitories'], action.MESSAGES)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_MESSAGES_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
